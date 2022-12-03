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
  useToast,
} from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { useStudentsQuery } from "../api/graphql";
import { termOfOfficeAtom } from "../atoms/termOfOffice.atom";
import { Loader } from "../components/Loader";
import { NoItems } from "../components/NoItems";
import { useErrorHandler } from "../hooks/useErrorHandler";

function OrganisationStructure() {
  const termOfOffice = useAtomValue(termOfOfficeAtom);
  const toast = useToast();
  const errorHandler = useErrorHandler();
  const studentsQuery = useStudentsQuery({
    variables: {
      termOfOffice: termOfOffice?.toString() ?? "",
    },
    skip: !termOfOffice,
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
        {students.length === 0 &&
        !studentsQuery.loading &&
        studentsQuery.error !== undefined ? (
          <NoItems>Brak danych</NoItems>
        ) : null}
      </VStack>
    </Center>
  );
}

export default OrganisationStructure;
