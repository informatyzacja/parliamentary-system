import { InfoOutlineIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/next-js';
import {
  Box,
  Center,
  Divider,
  Heading,
  ScaleFade,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import type { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import type { ResolutionEntity } from '@/api/graphql';
import { useMeetingQuery } from '@/api/graphql';
import { Loader } from '@/components/layout/Loader';
import { PreviewPDF } from '@/components/misc/PreviewPDF';
import { Resolutions } from '@/components/resolution/Resolutions';
import { useErrorHandler } from '@/hooks/useErrorHandler';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const Meeting = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { id } = router.query;
  const errorHandler = useErrorHandler();
  const meetingQuery = useMeetingQuery({
    variables: {
      id: (id as string | undefined) ?? '',
    },
    skip: !id,
    onError: errorHandler,
  });

  const meeting = meetingQuery.data?.meeting.data;
  const resolutions = meeting?.attributes.resolutions
    .data as ResolutionEntity[];

  return (
    <Center>
      <VStack spacing={8}>
        <Box>
          <Heading size="lg" mb={8}>
            {meeting?.attributes.name}
          </Heading>
          <Divider mb={8} />
        </Box>
        {meeting?.attributes.agenda.data ? (
          <ScaleFade in={true}>
            <Heading color="blue.500" size="sm" mb={8}>
              <Link
                target="_blank"
                href={
                  process.env.NEXT_PUBLIC_API_URL +
                  meeting.attributes.agenda.data.attributes.url
                }
                prefetch={false}
              >
                {t('meeting.agenda')}
              </Link>
            </Heading>
          </ScaleFade>
        ) : null}
        {meeting?.attributes.protocol.data ? (
          <ScaleFade in={true}>
            <Heading color="blue.500" size="sm" mb={8}>
              <Link
                target="_blank"
                href={
                  process.env.NEXT_PUBLIC_API_URL +
                  meeting.attributes.protocol.data.attributes.url
                }
                prefetch={false}
              >
                {t('meeting.protocol')}
              </Link>
            </Heading>
          </ScaleFade>
        ) : null}
        <Box mt={16}>
          <Heading size="md">{t('meeting.reports')}</Heading>
        </Box>
        {meetingQuery.loading ? (
          <Loader />
        ) : (
          <ScaleFade in={true}>
            {meeting?.attributes.reports.data.length === 0 ? (
              <VStack>
                <InfoOutlineIcon mt={2} />
                <Text size="md">{t('meeting.no-reports')}</Text>
              </VStack>
            ) : (
              <TableContainer maxW="90vw">
                <Table size="lg" w="800px">
                  <Thead>
                    <Tr>
                      <Th>#</Th>
                      <Th>{t('name')}</Th>
                      <Th />
                      <Th />
                    </Tr>
                  </Thead>
                  <Tbody>
                    {meeting?.attributes.reports.data
                      ? meeting.attributes.reports.data.map(
                          (report, index: number) => (
                            <Tr key={meeting.id}>
                              <Td>{index + 1}</Td>
                              <Td>
                                <Link
                                  target="_blank"
                                  href={
                                    process.env.NEXT_PUBLIC_API_URL +
                                    report.attributes.url
                                  }
                                  prefetch={false}
                                >
                                  {report.attributes.name}
                                </Link>
                              </Td>
                              <Td w="10">
                                <PreviewPDF
                                  url={
                                    process.env.NEXT_PUBLIC_API_URL +
                                    report.attributes.url
                                  }
                                  filename={report.attributes.name}
                                />
                              </Td>
                              <Td w="10">
                                <Link
                                  href={
                                    process.env.NEXT_PUBLIC_API_URL +
                                    report.attributes.url
                                  }
                                  prefetch={false}
                                >
                                  {t('Download')}
                                </Link>
                              </Td>
                            </Tr>
                          ),
                        )
                      : null}
                  </Tbody>
                </Table>
              </TableContainer>
            )}
          </ScaleFade>
        )}
        <Box mt={16}>
          <Heading size="md">{t('resolutions')}</Heading>
        </Box>
        {meetingQuery.data?.meeting.data.attributes.resolutions.data.length ===
        0 ? (
          <VStack>
            <InfoOutlineIcon mt={2} />
            <Text size="md">{t('no-resolutions')}</Text>
          </VStack>
        ) : (
          <Resolutions
            showMeetings={false}
            resolutions={resolutions}
            pagination={{
              pageSize: 1000,
              currentPage: 1,
            }}
          />
        )}
      </VStack>
    </Center>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'pl', ['common'])),
  },
});

export default Meeting;
