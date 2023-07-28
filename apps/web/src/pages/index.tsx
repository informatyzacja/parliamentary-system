import { useApolloClient } from '@apollo/client';
import { ArrowForwardIcon, DownloadIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Divider,
  Flex,
  Heading,
  Link as ChakraLink,
  ScaleFade,
  Text,
  VStack,
} from '@chakra-ui/react';
import { format, formatRelative } from 'date-fns';
import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import {
  MeetingDocument,
  useLatestMeetingsAndResolutionsQuery,
} from '@/api/graphql';
import { Link } from '@/components/Link';
import { Loader } from '@/components/Loader';
import { NoItems } from '@/components/NoItems';
import { useErrorHandler } from '@/hooks/useErrorHandler';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

function LatestUpdates() {
  const { t } = useTranslation('common');
  const getLocale = (locale: string) =>
    require(`date-fns/locale/${locale}/index.js`);
  const errorHandler = useErrorHandler();
  const latestUpdatesQuery = useLatestMeetingsAndResolutionsQuery({
    onError: errorHandler,
  });
  const client = useApolloClient();

  const meetings = latestUpdatesQuery.data?.meetings.data ?? [];
  const resolutions = latestUpdatesQuery.data?.resolutions.data ?? [];
  const upcomingMeeting = meetings.findLast(
    (meeting) =>
      new Date(meeting.attributes.date as string).getTime() > Date.now(),
  );

  if (latestUpdatesQuery.loading) {
    return <Loader />;
  }

  if (
    latestUpdatesQuery.data?.meetings.data.length === 0 &&
    latestUpdatesQuery.data.resolutions.data.length === 0
  ) {
    return <NoItems>{t('no-news')}</NoItems>;
  }

  return (
    <Center>
      <VStack>
        <Heading size="lg" mb={8}>
          {t('latest-updates')}
        </Heading>
        <ScaleFade in={latestUpdatesQuery.data !== undefined}>
          <Flex
            flexDirection={{ base: 'column', lg: 'row' }}
            alignItems={['center', 'stretch']}
            gap="8"
          >
            <Card w={{ base: '90vw', lg: '40vw' }} minH="100%">
              {upcomingMeeting !== undefined ? (
                <CardHeader backgroundColor="blue.100" px={10}>
                  <Flex
                    flexDirection="row"
                    alignItems="center"
                    flex={1}
                    justifyContent="space-between"
                  >
                    <Flex flexDirection="column">
                      <Heading size="md">{t('upcoming')}</Heading>
                      <Text fontSize={{ base: 'md', md: 'lg' }}>
                        {upcomingMeeting.attributes.name}
                      </Text>
                      <Text fontSize={{ base: 'md', md: 'lg' }}>
                        {formatRelative(
                          new Date(upcomingMeeting.attributes.date as string),
                          new Date(),
                          { locale: getLocale(t('language-code')) },
                        )}
                      </Text>
                    </Flex>
                    <Flex>
                      <Link href={`/posiedzenia/${upcomingMeeting.id}`}>
                        <Button
                          leftIcon={<ArrowForwardIcon />}
                          size="sm"
                          backgroundColor="blue.50"
                          onMouseOver={() => {
                            void client.query({
                              query: MeetingDocument,
                              variables: {
                                id: upcomingMeeting.id,
                              },
                            });
                          }}
                        >
                          {t('more')}
                        </Button>
                      </Link>
                    </Flex>
                  </Flex>
                </CardHeader>
              ) : (
                <CardHeader>
                  <Heading size="md">{t('last-meetings')}</Heading>
                </CardHeader>
              )}
              <CardBody>
                <Flex flexDirection="column">
                  {meetings
                    .filter(
                      (meeting) =>
                        Date.now() >
                        new Date(meeting.attributes.date as string).getTime(),
                    )
                    .slice(0, 5)
                    .map((meeting) => (
                      <>
                        <Divider />
                        <Flex
                          key={meeting.id}
                          gap={5}
                          flex={1}
                          alignItems="center"
                          px={5}
                          py={2.5}
                        >
                          <Box
                            minWidth="20%"
                            display={{ base: 'none', md: 'block' }}
                          >
                            {format(
                              new Date(meeting.attributes.date as string),
                              'dd/MM/yyyy',
                            )}
                          </Box>
                          <Box flex={1}>{meeting.attributes.name}</Box>
                          <Box maxWidth="fit-content" justifySelf="right">
                            <Link href={`/posiedzenia/${meeting.id}`}>
                              <Button
                                leftIcon={<ArrowForwardIcon />}
                                size="sm"
                                onMouseOver={() => {
                                  void client.query({
                                    query: MeetingDocument,
                                    variables: {
                                      id: meeting.id,
                                    },
                                  });
                                }}
                              >
                                {t('more')}
                              </Button>
                            </Link>
                          </Box>
                        </Flex>
                      </>
                    ))}
                  <Divider />
                </Flex>
              </CardBody>
            </Card>

            <Card w={{ base: '90vw', lg: '40vw' }} minH="100%">
              <CardHeader>
                <Heading size="md">{t('last-resolutions')}</Heading>
              </CardHeader>
              <CardBody>
                <Flex flexDirection="column">
                  {resolutions.slice(0, 5).map((resolution) => (
                    <>
                      <Divider />
                      <Flex
                        key={resolution.id}
                        gap={5}
                        flex={1}
                        alignItems="center"
                        px={5}
                        py={2.5}
                      >
                        <Box
                          textAlign="left"
                          minWidth="20%"
                          display={{ base: 'none', md: 'block' }}
                        >
                          {format(
                            new Date(
                              resolution.attributes.publishedAt as string,
                            ),
                            'dd/MM/yyyy',
                          )}
                        </Box>
                        <Box textAlign="left" flex={1}>
                          {resolution.attributes.name}
                        </Box>
                        <Box maxWidth="fit-content" justifySelf="right">
                          {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */}
                          {resolution.attributes.document.data === null ? (
                            <Button
                              leftIcon={<DownloadIcon />}
                              size="sm"
                              isDisabled={true}
                            >
                              {t('Download')}
                            </Button>
                          ) : (
                            <ChakraLink
                              href={
                                process.env.NEXT_PUBLIC_API_URL +
                                resolution.attributes.document.data.attributes
                                  .url
                              }
                              target="_blank"
                            >
                              <Button leftIcon={<DownloadIcon />} size="sm">
                                {t('download')}
                              </Button>
                            </ChakraLink>
                          )}
                        </Box>
                      </Flex>
                    </>
                  ))}
                  <Divider />
                </Flex>
              </CardBody>
            </Card>
          </Flex>
        </ScaleFade>
      </VStack>
    </Center>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'pl', ['common'])),
  },
});

export default LatestUpdates;
