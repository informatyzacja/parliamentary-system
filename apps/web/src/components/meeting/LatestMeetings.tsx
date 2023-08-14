import { useApolloClient } from '@apollo/client';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/next-js';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import { format, formatRelative } from 'date-fns';
import { useTranslation } from 'next-i18next';

import type { MeetingEntity } from '@/api/graphql';
import { MeetingDocument } from '@/api/graphql';

export const LatestMeetings = ({ meetings }: { meetings: MeetingEntity[] }) => {
  const { t } = useTranslation('common');
  const getLocale = (locale: string) =>
    require(`date-fns/locale/${locale}/index.js`);

  const client = useApolloClient();

  const upcomingMeeting = meetings.findLast(
    (meeting) =>
      new Date(meeting.attributes.date as string).getTime() > Date.now(),
  );

  return (
    <Card w={{ base: '90vw', lg: '40vw' }} minH="100%">
      {upcomingMeeting ? (
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
                  <Box minWidth="20%" display={{ base: 'none', md: 'block' }}>
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
  );
};
