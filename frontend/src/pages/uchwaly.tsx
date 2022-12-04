import { FC, useState } from "react";
import { Loader } from "../components/Loader";
import { Box, Center, Heading, VStack } from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { termOfOfficeAtom } from "../atoms/termOfOffice.atom";
import { useResolutionsQuery } from "../api/graphql";
import { Pagination } from "../components/Pagination";
import { Resolutions } from "../components/Resolutions";
import { NoItems } from "../components/NoItems";
import { useErrorHandler } from "../hooks/useErrorHandler";

interface ResolutionsProps {
  meetingId?: number;
}

const ResolutionsPage: FC<ResolutionsProps> = (props) => {
  const currentTerm = useAtomValue(termOfOfficeAtom);
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const errorHandler = useErrorHandler();
  const resolutionsQuery = useResolutionsQuery({
    variables: {
      termId: currentTerm?.toString() ?? "",
      // @ts-ignore
      pagination: {
        pageSize: pageSize,
        page: currentPage,
      },
    },
    onError: errorHandler,
    skip: !currentTerm,
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
          {resolutionsQuery.loading ? <Loader /> : null}
          {resolutionsQuery.data?.resolutions.data.length === 0 && !resolutionsQuery.loading ? (
            <NoItems>Brak uchwał</NoItems>
          ) : null}
          {resolutions.length > 0 ? (
            <>
              <Resolutions
                showMeetings={true}
                resolutions={resolutions}
                pagination={{
                  currentPage,
                  pageSize,
                }}
              />
              <Pagination
                current={currentPage}
                pageCount={pageCount}
                setCurrent={setCurrentPage}
              />
            </>
          ) : null}
        </VStack>
      </Center>
    </>
  );
};

export default ResolutionsPage;
