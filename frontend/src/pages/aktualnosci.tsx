import NextLink from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import Loader from "../components/loader";
import {
  Card,
  CardBody,
  CardHeader,
  Link,
  Center,
  Heading,
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
  VStack,
} from "@chakra-ui/react";

function LatestUpdates({ Component, pageProps }: any) {
  const [meetings, setMeetings] = useState<any[]>([]);
  const [resolutions, setResolutions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "meetings?pagination[start]=0&pagination[limit]=10&sort[0]=date:desc&sort[1]=id:desc"
      )
      .then((res) => {
        setIsLoading(false);
        setMeetings(res.data.data);
      });
    axios
      .get(
        "resolutions?populate[0]=document&pagination[start]=0&pagination[limit]=10&sort[0]=id:desc"
      )
      .then((res) => {
        setIsLoading(false);
        setResolutions(res.data.data);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Center>
        <HStack flexDirection={["column", "row"]}>
          <Card w={["90vw", "600px"]}>
            <CardHeader>
              <Heading size="md">Ostatnie posiedzenia</Heading>
            </CardHeader>
            <CardBody>
              <TableContainer maxW="600px">
                <Table variant="simple" size="lg">
                  <Tbody>
                    {meetings.map((meeting) => (
                      <Tr key={meeting.id}>
                        <Td>
                          {format(
                            new Date(meeting.attributes.date),
                            "dd-MM-yyyy"
                          )}
                        </Td>
                        <Td>{meeting.attributes.name}</Td>
                        <Td>
                          <Link href={`/posiedzenie/${meeting.id}`}>
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
          <Card w={["90vw", "600px"]}>
            <CardHeader>
              <Heading size="md">Ostatnie uchwały</Heading>
            </CardHeader>
            <CardBody>
              <TableContainer>
                <Table variant="simple" size="lg">
                  {resolutions.map((resolution) => (
                    <Tr key={resolution.id}>
                      <Td>
                        {format(
                          new Date(resolution.attributes.createdAt),
                          "dd-MM-yyyy"
                        )}
                      </Td>
                      <Td>{resolution.attributes.name}</Td>
                      <Td>
                        <Link
                          href={
                            process.env.NEXT_PUBLIC_API_URL +
                            resolution.attributes.document.data.attributes.url
                          }
                        >
                          pobierz
                        </Link>
                      </Td>
                    </Tr>
                  ))}
                </Table>
              </TableContainer>
            </CardBody>
          </Card>
        </HStack>
      </Center>
    </>
  );
}

export default LatestUpdates;
