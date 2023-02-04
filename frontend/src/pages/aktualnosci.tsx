import { useApolloClient } from "@apollo/client";
import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Flex,
  Heading,
  Link as ChakraLink,
  ScaleFade,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import { format } from "date-fns";

import {
  MeetingDocument,
  useLatestMeetingsAndResolutionsQuery,
} from "../api/graphql";
import { Link } from "../components/Link";
import { Loader } from "../components/Loader";
import { NoItems } from "../components/NoItems";
import { useErrorHandler } from "../hooks/useErrorHandler";

function LatestUpdates() {
  const errorHandler = useErrorHandler();
  const latestUpdatesQuery = useLatestMeetingsAndResolutionsQuery({
    onError: errorHandler,
  });
  const client = useApolloClient();

  const meetings = latestUpdatesQuery.data?.meetings.data ?? [];
  const resolutions = latestUpdatesQuery.data?.resolutions.data ?? [];

  if (latestUpdatesQuery.loading) {
    return <Loader />;
  }

  if (
    latestUpdatesQuery.data?.meetings.data.length === 0 &&
    latestUpdatesQuery.data.resolutions.data.length === 0
  ) {
    return <NoItems>Brak aktualności</NoItems>;
  }

  return (
    <>
      <Center>
        <ScaleFade in={latestUpdatesQuery.data !== undefined}>
          <Flex
            flexDirection={["column", "row"]}
            alignItems={["center", "stretch"]}
            gap="8"
          >
            <Card w={["90vw", "600px"]} h="100%">
              <CardHeader>
                <Heading size="md">Ostatnie posiedzenia</Heading>
              </CardHeader>
              <CardBody>
                <TableContainer>
                  <Table variant="simple" size="lg">
                    <Tbody>
                      {meetings.map((meeting) => (
                        <Tr key={meeting.id}>
                          <Td>
                            {format(
                              new Date(meeting.attributes.date as string),
                              "dd-MM-yyyy"
                            )}
                          </Td>
                          <Td>{meeting.attributes.name}</Td>
                          <Td
                            onMouseOver={() => {
                              void client.query({
                                query: MeetingDocument,
                                variables: {
                                  id: meeting.id,
                                },
                              });
                            }}
                          >
                            <Link href={`/posiedzenia/${meeting.id}`}>
                              więcej
                            </Link>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </CardBody>
            </Card>

            <Card w={["90vw", "600px"]} minH="100%">
              <CardHeader>
                <Heading size="md">Ostatnie uchwały</Heading>
              </CardHeader>
              <CardBody>
                <TableContainer>
                  <Table variant="simple" size="lg">
                    <Tbody>
                      {resolutions.map((resolution) => (
                        <Tr key={resolution.id}>
                          <Td>
                            {format(
                              new Date(
                                resolution.attributes.publishedAt as string
                              ),
                              "dd-MM-yyyy"
                            )}
                          </Td>
                          <Td>{resolution.attributes.name}</Td>
                          <Td>
                            <ChakraLink
                              href={
                                process.env.NEXT_PUBLIC_API_URL +
                                resolution.attributes.document.data.attributes
                                  .url
                              }
                            >
                              pobierz
                            </ChakraLink>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </CardBody>
            </Card>
          </Flex>
        </ScaleFade>
      </Center>
    </>
  );
}

export default LatestUpdates;
