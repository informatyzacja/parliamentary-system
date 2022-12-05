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
import { useStudentsQuery } from "../api/graphql";
import { Loader } from "../components/Loader";
import { NoItems } from "../components/NoItems";
import { useCurrentTermId } from "../hooks/useCurrentTermId";
import { useErrorHandler } from "../hooks/useErrorHandler";

function OrganisationStructure() {
  const currentTermId = useCurrentTermId();
  const errorHandler = useErrorHandler();
  const studentsQuery = useStudentsQuery({
    variables: {
      termId: currentTermId ?? "",
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
            <TableContainer maxW="90vw">
              <Table variant="simple" size="lg">
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
                      <Td>{index + 1}</Td>
                      <Td>{student.attributes.name}</Td>
                      <Td>{student.attributes.surname}</Td>
                      <Td>
                        {student.attributes.functions.data
                          .map(({ attributes }) => attributes.name)
                          .join(", ")}
                      </Td>
                      <Td>{student.attributes.student_number}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
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
