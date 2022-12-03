import { useState } from "react";
import { format } from "date-fns";
import React from "react";
import { Loader } from "../../components/Loader";
import {
  Center,
  Heading,
  ScaleFade,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Meeting } from "../../components/Meeting";
import { useMeetingsQuery } from "../../api/graphql";
import { Pagination } from "../../components/Pagination";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { termOfOfficeAtom } from "../../atoms/termOfOffice.atom";
import { useAtomValue } from "jotai";

export default function Meetings() {
  const currentTerm = useAtomValue(termOfOfficeAtom);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 10;
  const meetingsQuery = useMeetingsQuery({
    variables: {
      termId: currentTerm?.toString() ?? "",
      // @ts-ignore
      pagination: {
        pageSize: pageSize,
        page: currentPage,
      },
    },
    skip: !currentTerm,
  });

  const pageCount = meetingsQuery.data?.meetings.meta.pagination.pageCount ?? 1;

  const meetings = meetingsQuery.data?.meetings.data ?? [];

  return (
    <Center>
      <VStack>
        <Heading size="lg">Posiedzenia parlamentu</Heading>
        {meetingsQuery.loading ? <Loader /> : null}
        {meetings.length === 0 && !meetingsQuery.loading ? (
          <VStack>
            <InfoOutlineIcon mt={30} />
            <Text size="md">Brak posiedzeń</Text>
          </VStack>
        ) : null}
        <Wrap spacing={4} justify="center">
          {meetings.map((meeting) => (
            <WrapItem key={meeting.id}>
              <ScaleFade in={true}>
                <Meeting
                  id={meeting.id}
                  name={meeting.attributes.name}
                  place={meeting.attributes.place.replace(/_/, " ")}
                  date={format(new Date(meeting.attributes.date), "dd.MM.yyyy")}
                />
              </ScaleFade>
            </WrapItem>
          ))}
        </Wrap>
        <Pagination
          current={currentPage}
          pageCount={pageCount}
          setCurrent={setCurrentPage}
        />
      </VStack>
    </Center>
  );
}
