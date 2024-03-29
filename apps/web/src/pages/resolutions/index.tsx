import { usePagination } from '@ajna/pagination';
import { Box, Center, Heading, VStack } from '@chakra-ui/react';
import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { FC } from 'react';
import { useState } from 'react';

import type { ResolutionEntity } from '@/api/graphql';
import { useResolutionsQuery } from '@/api/graphql';
import { Loader } from '@/components/layout/Loader';
import { NoItems } from '@/components/layout/NoItems';
import { Pagination } from '@/components/layout/Pagination';
import { TermOfOfficeSelector } from '@/components/misc/TermOfOfficeSelector';
import { Resolutions } from '@/components/resolution/Resolutions';
import { useCurrentTermId } from '@/hooks/useCurrentTermId';
import { useErrorHandler } from '@/hooks/useErrorHandler';

interface ResolutionsProps {
  meetingId?: number;
}

const ResolutionsPage: FC<ResolutionsProps> = () => {
  const { t } = useTranslation('common');
  const [currentTermId] = useCurrentTermId();
  const [totalPages, setTotalPages] = useState<number | undefined>(undefined);
  const errorHandler = useErrorHandler();
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
  const resolutionsQuery = useResolutionsQuery({
    variables: {
      termId: currentTermId ?? '',
      pageSize: pagination.pageSize,
      page: pagination.currentPage,
    },
    onError: errorHandler,
    onCompleted(data) {
      setTotalPages(data.resolutions.meta.pagination.pageCount);
    },
    skip: !currentTermId,
  });
  const pageCount =
    resolutionsQuery.data?.resolutions.meta.pagination.pageCount ?? 1;
  const resolutions = (resolutionsQuery.data?.resolutions.data ??
    []) as ResolutionEntity[];

  return (
    <Center>
      <VStack>
        <Box mb={8}>
          <Heading size="lg">{t('resolutions')}</Heading>
        </Box>
        <Box mt="1 !important" mb="4 !important">
          <TermOfOfficeSelector />
        </Box>
        {resolutionsQuery.loading ? <Loader /> : null}
        {resolutionsQuery.data?.resolutions.data.length === 0 &&
        !resolutionsQuery.loading ? (
          <NoItems>{t('no-resolutions')}</NoItems>
        ) : null}
        {resolutions.length > 0 ? (
          <>
            <Resolutions
              showMeetings={true}
              resolutions={resolutions}
              pagination={{
                currentPage: pagination.currentPage,
                pageSize: pagination.currentPage,
              }}
            />
            <Pagination
              pages={pagination.pages}
              current={pagination.currentPage}
              pageCount={pageCount}
              setCurrent={pagination.setCurrentPage}
            />
          </>
        ) : null}
      </VStack>
    </Center>
  );
};

export const getStaticProps: GetStaticProps<object> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'pl', ['common'])),
  },
});

export default ResolutionsPage;
