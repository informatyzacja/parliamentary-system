import { FC, useState } from "react";
import { Loader } from "../components/Loader";
import { Box, Center, Heading, VStack } from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { termOfOfficeAtom } from "../atoms/termOfOffice.atom";
import { useResolutionsQuery } from "../api/graphql";
import { Pagination } from "../components/Pagination";
import { Resolutions } from "../components/Resolutions";

interface ResolutionsProps {
  meetingId?: number;
}

const ResolutionsPage: FC<ResolutionsProps> = (props) => {
  const currentTerm = useAtomValue(termOfOfficeAtom);
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const resolutionsQuery = useResolutionsQuery({
    variables: {
      termOfOffice: currentTerm?.toString() ?? "",
      // @ts-ignore
      pagination: {
        pageSize: pageSize,
        page: currentPage,
      },
    },
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
          {resolutionsQuery.loading && resolutionsQuery.data !== undefined ? (
            <Loader />
          ) : (
            <>
              {" "}
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
          )}
        </VStack>
      </Center>
    </>
  );
};

export default ResolutionsPage;
