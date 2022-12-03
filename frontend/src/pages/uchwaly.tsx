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

interface ResolutionsProps {
  meetingId?: number;
}

const Resolutions: FC<ResolutionsProps> = (props) => {
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
          <TableContainer>
            <Table size="lg" w="800px">
              <Thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Numer</Th>
                  <Th>Nazwa</Th>
                  <Th>Rodzaj</Th>
                  {!props.meetingId && <Th>Posiedzenie</Th>}
                  <Th>Data dodania</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {resolutions.map((resolution, index: number) => (
                  <Tr key={resolution.id}>
                    <Td>{index + 1 + (currentPage - 1) * pageSize}</Td>
                    <Td>{resolution.attributes.number}</Td>
                    <Td>{resolution.attributes.name}</Td>
                    <Td>
                      <ResolutionType
                        resolutionType={resolution.attributes.type}
                      />
                    </Td>
                    {!props.meetingId && (
                      <Td>
                        <NextLink
                          href={`/posiedzenia/${resolution.attributes.meeting.data.id}`}
                          passHref
                        >
                          <Link>
                            {resolution.attributes.meeting.data.attributes.name}
                          </Link>
                        </NextLink>
                      </Td>
                    )}
                    <Td>
                      {format(
                        new Date(resolution.attributes.publishedAt),
                        "dd-MM-yyyy HH:mm:ss"
                      )}
                    </Td>
                    <Td>
                      <Link
                        target="_blank"
                        href={
                          process.env.NEXT_PUBLIC_API_URL +
                          resolution.attributes.document.data.attributes.url
                        }
                      >
                        Pobierz
                      </Link>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
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

export default Resolutions;
