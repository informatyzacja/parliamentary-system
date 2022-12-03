import { FC, useState } from "react";
import { format } from "date-fns";
import Loader from "../components/Loader";
import NextLink from "next/link";
import {
  Center,
  Heading,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { termOfOfficeAtom } from "../atoms/termOfOffice.atom";
import { useResolutionsQuery } from "../api/graphql";
import { Pagination } from "../components/ChakraPagination";
import { ResolutionType } from "../components/ResolutionType";
import { Resolutions } from "../components/Resolutions";

interface ResolutionsProps {
  meetingId?: number;
}

const ResolutionsPage: FC<ResolutionsProps> = (props) => {
  const currentTerm = useAtomValue(termOfOfficeAtom);
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [header, setHeader] = useState<string>("");
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
      {resolutionsQuery.loading && <Loader />}
      <Center>
        <VStack>
          <Heading size="md">{header}</Heading>
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
        </VStack>
      </Center>
    </>
  );
};

export default ResolutionsPage;
