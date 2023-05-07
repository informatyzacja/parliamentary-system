import { useApolloClient } from '@apollo/client';
import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Flex,
  Heading,
  Link as ChakraLink,
  ScaleFade,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import {
  MeetingDocument,
  useLatestMeetingsAndResolutionsQuery,
} from '../api/graphql';
import { Link } from '../components/Link';
import { Loader } from '../components/Loader';
import { NoItems } from '../components/NoItems';
import { useErrorHandler } from '../hooks/useErrorHandler';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

function LatestUpdates() {
  const { t } = useTranslation('common');
  const errorHandler = useErrorHandler();
  const latestUpdatesQuery = useLatestMeetingsAndResolutionsQuery({
    onError: errorHandler,
  });
  const client = useApolloClient();

  const meetings = latestUpdatesQuery.data?.meetings.data ?? [];
  const resolutions = latestUpdatesQuery.data?.resolutions.data ?? [];

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
    <>
      <Center>
        <ScaleFade in={latestUpdatesQuery.data !== undefined}>
          <Flex
            flexDirection={['column', 'row']}
            alignItems={['center', 'stretch']}
            gap="8"
          >
            <Card w={['90vw', '600px']} h="100%">
              <CardHeader>
                <Heading size="md">{t('last-meetings')}</Heading>
              </CardHeader>
              <CardBody>
                <TableContainer>
                  <Table variant="simple" size="lg">
                    <Tbody>
                      {meetings.map((meeting) => (
                        <Tr key={meeting.id}>
                          <Td>
                            {format(
                              new Date(meeting.attributes.date as string),
                              'dd-MM-yyyy',
                            )}
                          </Td>
                          <Td>{meeting.attributes.name}</Td>
                          <Td
                            onMouseOver={() => {
                              void client.query({
                                query: MeetingDocument,
                                variables: {
                                  id: meeting.id,
                                },
                              });
                            }}
                          >
                            <Link href={`/posiedzenia/${meeting.id}`}>
                              {t('more')}
                            </Link>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </CardBody>
            </Card>

            <Card w={['90vw', '600px']} minH="100%">
              <CardHeader>
                <Heading size="md">{t('last-resolutions')}</Heading>
              </CardHeader>
              <CardBody>
                <TableContainer>
                  <Table variant="simple" size="lg">
                    <Tbody>
                      {resolutions.map((resolution) => (
                        <Tr key={resolution.id}>
                          <Td>
                            {format(
                              new Date(
                                resolution.attributes.publishedAt as string,
                              ),
                              'dd-MM-yyyy',
                            )}
                          </Td>
                          <Td>{resolution.attributes.name}</Td>
                          <Td>
                            <ChakraLink
                              href={
                                process.env.NEXT_PUBLIC_API_URL +
                                resolution.attributes.document.data.attributes
                                  .url
                              }
                            >
                              {t('download')}
                            </ChakraLink>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </CardBody>
            </Card>
          </Flex>
        </ScaleFade>
      </Center>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'pl', ['common'])),
  },
});

export default LatestUpdates;
