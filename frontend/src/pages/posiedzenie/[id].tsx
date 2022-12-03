import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import Resolutions from "../uchwaly";
import axios from "axios";
import {
  Box,
  Center,
  Divider,
  Heading,
  HStack,
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
import { useMeetingQuery } from "../../api/graphql";

const Meeting = () => {
  const router = useRouter();
  const { id } = router.query;
  const meetingQuery = useMeetingQuery({
    variables: {
      id: (id as string) ?? "",
    },
    skip: !id,
  });

  const meeting = meetingQuery.data?.meeting.data;

  return (
    <Center>
      <VStack spacing={8}>
        <Box>
          <Heading size="lg" mb={8}>
            {meeting?.attributes.name}
          </Heading>
          <Divider mb={8} />
        </Box>
        {meeting?.attributes?.agenda.data && (
          <h1 className="font-medium leading-tight text-3xl mt-0 mb-5 mt-5 text-black-600">
            <Link
              href={
                process.env.NEXT_PUBLIC_API_URL +
                meeting.attributes?.agenda?.data.attributes.url
              }
            >
              Agenda posiedzenia
            </Link>
          </h1>
        )}
        <Box mt={16}>
          <Heading size="md">Sprawozdania z posiedzenia</Heading>
        </Box>
        <TableContainer>
          <Table size="lg" w="800px">
            <Thead>
              <Tr>
                <Th scope="col" className="py-3 px-6">
                  #
                </Th>
                <Th scope="col" className="py-3 px-6">
                  Nazwa
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {meeting?.attributes?.reports.data &&
                meeting.attributes.reports?.data.map(
                  (report: any, index: number) => (
                    <Tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      key={meeting.id}
                    >
                      <Td className="py-4 px-6">{index + 1}</Td>
                      <Td className="py-4 px-6">
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
                    </Tr>
                  )
                )}
            </Tbody>
          </Table>
        </TableContainer>

        <Resolutions meetingId={parseInt(id as string)} />
      </VStack>
    </Center>
  );
};

export default Meeting;
