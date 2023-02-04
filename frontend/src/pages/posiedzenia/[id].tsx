import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Divider,
  Heading,
  Link,
  ScaleFade,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import { useMeetingQuery } from "@/api/graphql";
import { Loader } from "@/components/Loader";
import { PreviewPDF } from "@/components/PreviewPDF";
import { Resolutions } from "@/components/Resolutions";
import { useErrorHandler } from "@/hooks/useErrorHandler";

const Meeting = () => {
  const router = useRouter();
  const { id } = router.query;
  const errorHandler = useErrorHandler();
  const meetingQuery = useMeetingQuery({
    variables: {
      id: (id as string | undefined) ?? "",
    },
    skip: !id,
    onError: errorHandler,
  });

  const meeting = meetingQuery.data?.meeting.data;
  const resolutions = meeting?.attributes.resolutions.data;

  return (
    <Center>
      <VStack spacing={8}>
        <Box>
          <Heading size="lg" mb={8}>
            {meeting?.attributes.name}
          </Heading>
          <Divider mb={8} />
        </Box>
        {meeting?.attributes.agenda.data && (
          <ScaleFade in={true}>
            <Heading color="blue.500" size="sm" mb={8}>
              <Link
                target="_blank"
                href={
                  process.env.NEXT_PUBLIC_API_URL +
                  meeting.attributes.agenda.data.attributes.url
                }
              >
                Agenda posiedzenia
              </Link>
            </Heading>
          </ScaleFade>
        )}
        {meeting?.attributes.protocol.data && (
          <ScaleFade in={true}>
            <Heading color="blue.500" size="sm" mb={8}>
              <Link
                target="_blank"
                href={
                  process.env.NEXT_PUBLIC_API_URL +
                  meeting.attributes.protocol.data.attributes.url
                }
              >
                Protokół z posiedzenia
              </Link>
            </Heading>
          </ScaleFade>
        )}
        <Box mt={16}>
          <Heading size="md">Sprawozdania z posiedzenia</Heading>
        </Box>
        {meetingQuery.loading ? (
          <Loader />
        ) : (
          <ScaleFade in={true}>
            {meeting?.attributes.reports.data.length === 0 ? (
              <VStack>
                <InfoOutlineIcon mt={2} />
                <Text size="md">Brak sprawozdań</Text>
              </VStack>
            ) : (
              <TableContainer maxW={"90vw"}>
                <Table size="lg" w="800px">
                  <Thead>
                    <Tr>
                      <Th>#</Th>
                      <Th>Nazwa</Th>
                      <Th></Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {meeting?.attributes.reports.data &&
                      meeting.attributes.reports.data.map(
                        (report, index: number) => (
                          <Tr key={meeting.id}>
                            <Td>{index + 1}</Td>
                            <Td>
                              <Link
                                target={"_blank"}
                                href={
                                  process.env.NEXT_PUBLIC_API_URL +
                                  report.attributes.url
                                }
                              >
                                {report.attributes.name}
                              </Link>
                            </Td>
                            <Td w="10">
                              <PreviewPDF
                                url={
                                  process.env.NEXT_PUBLIC_API_URL +
                                  report.attributes.url
                                }
                                filename={report.attributes.name}
                              />
                            </Td>
                            <Td w="10">
                              <Link
                                href={
                                  process.env.NEXT_PUBLIC_API_URL +
                                  report.attributes.url
                                }
                              >
                                Pobierz
                              </Link>
                            </Td>
                          </Tr>
                        )
                      )}
                  </Tbody>
                </Table>
              </TableContainer>
            )}
          </ScaleFade>
        )}
        <Box mt={16}>
          <Heading size="md">Uchwały</Heading>
        </Box>
        {meetingQuery.data?.meeting.data.attributes.resolutions.data.length ===
        0 ? (
          <VStack>
            <InfoOutlineIcon mt={2} />
            <Text size="md">Brak uchwał</Text>
          </VStack>
        ) : (
          <Resolutions
            showMeetings={false}
            resolutions={resolutions ?? []}
            pagination={{
              pageSize: 1000,
              currentPage: 1,
            }}
          />
        )}
      </VStack>
    </Center>
  );
};

export default Meeting;
