import { usePagination } from '@ajna/pagination';
import {
  Box,
  Center,
  Heading,
  ScaleFade,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useState } from 'react';

import { useMeetingsQuery } from '@/api/graphql';
import { Loader } from '@/components/Loader';
import { Meeting } from '@/components/Meeting';
import { NoItems } from '@/components/NoItems';
import { Pagination } from '@/components/Pagination';
import TermOfOfficeSelector from '@/components/TermOfOfficeSelector';
import { useCurrentTermId } from '@/hooks/useCurrentTermId';
import { useErrorHandler } from '@/hooks/useErrorHandler';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export default function Meetings() {
  const { t } = useTranslation('common');
  const [currentTermId] = useCurrentTermId();
  const [totalPages, setTotalPages] = useState<number | undefined>(undefined);
  const pagination = usePagination({
    pagesCount: totalPages,
    initialState: {
      pageSize: 10,
      currentPage: 1,
    },
    limits: {
      inner: 1,
      outer: 1,
    },
  });
  const errorHandler = useErrorHandler();
  const meetingsQuery = useMeetingsQuery({
    variables: {
      termId: currentTermId ?? '',
      pageSize: pagination.pageSize,
      page: pagination.currentPage,
    },
    onError: errorHandler,
    onCompleted(data) {
      setTotalPages(data.meetings.meta.pagination.pageCount);
    },
    skip: !currentTermId,
  });

  const pageCount = meetingsQuery.data?.meetings.meta.pagination.pageCount ?? 1;

  const meetings = meetingsQuery.data?.meetings.data ?? [];

  return (
    <Center>
      <VStack>
        <Box mb={8}>
          <Heading size="lg">{t('parliament-meetings')}</Heading>
        </Box>
        <Box mt="1 !important" mb="4 !important">
          <TermOfOfficeSelector />
        </Box>
        {meetingsQuery.loading ? <Loader /> : null}
        {meetings.length === 0 && !meetingsQuery.loading ? (
          <NoItems>{t('no-meetings')}</NoItems>
        ) : null}
        <Wrap spacing={4} justify="center" px={5} py={4}>
          {meetings.map((meeting) => (
            <WrapItem key={meeting.id}>
              <ScaleFade in={true}>
                <Meeting
                  id={meeting.id}
                  name={meeting.attributes.name}
                  place={meeting.attributes.place}
                  date={format(
                    new Date(meeting.attributes.date as string),
                    'dd.MM.yyyy',
                  )}
                />
              </ScaleFade>
            </WrapItem>
          ))}
        </Wrap>
        <Pagination
          pages={pagination.pages}
          current={pagination.currentPage}
          pageCount={pageCount}
          setCurrent={pagination.setCurrentPage}
        />
      </VStack>
    </Center>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'pl', ['common'])),
  },
});
