import { usePagination } from "@ajna/pagination";
import { Box, Center, Heading, Tooltip, VStack } from "@chakra-ui/react";
import type { FC } from "react";
import { useState } from "react";

import { useResolutionsQuery } from "../api/graphql";
import { Loader } from "../components/Loader";
import { NoItems } from "../components/NoItems";
import { Pagination } from "../components/Pagination";
import { Resolutions } from "../components/Resolutions";
import TermOfOfficeSelector from "../components/TermOfOfficeSelector";
import { useCurrentTermId } from "../hooks/useCurrentTermId";
import { useErrorHandler } from "../hooks/useErrorHandler";

interface ResolutionsProps {
  meetingId?: number;
}

const ResolutionsPage: FC<ResolutionsProps> = () => {
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
      termId: currentTermId ?? "",
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
  const resolutions = resolutionsQuery.data?.resolutions.data ?? [];

  return (
    <>
      <Center>
        <VStack>
          <Box mb={8}>
            <Heading size="lg">Uchwały</Heading>
          </Box>
          <Tooltip label="Kadencja">
            <Box mt={"1 !important"} mb={"4 !important"}>
              <TermOfOfficeSelector />
            </Box>
          </Tooltip>
          {resolutionsQuery.loading ? <Loader /> : null}
          {resolutionsQuery.data?.resolutions.data.length === 0 &&
          !resolutionsQuery.loading ? (
            <NoItems>Brak uchwał</NoItems>
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
    </>
  );
};

export default ResolutionsPage;