import { usePagination } from "@ajna/pagination";
import {
  Center,
  Heading,
  ScaleFade,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
  Table,
} from "@chakra-ui/react";
import { useState } from "react";
import { useStudentsQuery } from "../api/graphql";
import { Loader } from "../components/Loader";
import { NoItems } from "../components/NoItems";
import { Pagination } from "../components/Pagination";
import { useCurrentTermId } from "../hooks/useCurrentTermId";
import { useErrorHandler } from "../hooks/useErrorHandler";

function OrganisationStructure() {
  const [currentTermId] = useCurrentTermId();
  const errorHandler = useErrorHandler();
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

  const studentsQuery = useStudentsQuery({
    variables: {
      termId: currentTermId ?? "",
      page: pagination.currentPage,
      pageSize: pagination.pageSize,
    },
    onCompleted(data) {
      setTotalPages(data.students.meta.pagination.pageCount);
    },
    skip: !currentTermId,
    onError: errorHandler,
  });

  const students = studentsQuery.data?.students.data ?? [];
  return (
    <Center>
      <VStack>
        <Heading size="lg" mb={8}>
          Struktura organizacyjna
        </Heading>
        {studentsQuery.loading ? <Loader /> : null}
        {students && students.length > 0 ? (
          <ScaleFade in={true}>
            <TableContainer px={4} maxW={["100%", null, null, "800px"]}>
              <Table
                variant="simple"
                size="lg"
                style={{
                  tableLayout: "fixed",
                }}
              >
                <Thead>
                  <Tr>
                    <Th>#</Th>
                    <Th>Imię</Th>
                    <Th>Nazwisko</Th>
                    <Th>Funkcje</Th>
                    <Th>Numer indeksu</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {students.map((student, index) => (
                    <Tr key={student.id}>
                      <Td>
                        {index +
                          1 +
                          (pagination.currentPage - 1) * pagination.pageSize}
                      </Td>
                      <Td>{student.attributes.name}</Td>
                      <Td>{student.attributes.surname}</Td>
                      <Td>
                        { student.attributes.functions.functions.data
                        .map(( { attributes }) => attributes.name)
                        .join(", ")}
                      </Td>
                      <Td>{student.attributes.student_number}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
            <Center>
              <Pagination
                current={pagination.currentPage}
                setCurrent={pagination.setCurrentPage}
                pageCount={pagination.pagesCount}
                pages={pagination.pages}
              />
            </Center>
          </ScaleFade>
        ) : null}
        {studentsQuery.data?.students.data.length === 0 &&
        !studentsQuery.loading ? (
          <NoItems>Brak danych</NoItems>
        ) : null}
      </VStack>
    </Center>
  );
}

export default OrganisationStructure;
