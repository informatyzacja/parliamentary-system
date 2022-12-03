import { useState } from "react";
import TermOfOfficeSelector from "../components/TermOfOfficeSelector";
import { format } from "date-fns";
import Loader from "../components/loader";
import {
  Center,
  Heading,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Meeting } from "../components/Meeting";
import { useMeetingsQuery } from "../api/graphql";
import { Pagination } from "../components/ChakraPagination";
import { InfoOutlineIcon } from "@chakra-ui/icons";

export default function Meetings() {
  const [currentTerm, setCurrentTerm] = useState<number>();
  const [pageSize, setPageSize] = useState<number>(8);
  const [currentPage, setCurrentPage] = useState<number>(1);
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

  const onTermChange = (termId: number) => {
    setCurrentTerm(termId);
  };

  return (
    <Center>
      <VStack>
        <Heading size="lg">Posiedzenia parlamentu</Heading>
        <TermOfOfficeSelector onTermChange={onTermChange} />
        {meetingsQuery.loading && <Loader />}
        {meetings.length === 0 && !meetingsQuery.loading ? (
          <VStack>
            <InfoOutlineIcon mt={30} />
            <Text size="md">Brak posiedzeń</Text>
          </VStack>
        ) : null}
        <Wrap spacing={4} justify="center">
          {meetings.map((meeting) => (
            <WrapItem key={meeting.id}>
              <Meeting
                id={meeting.id}
                name={meeting.attributes.name}
                place={meeting.attributes.place.replaceAll("_", " ")}
                date={format(new Date(meeting.attributes.date), "dd.MM.yyyy")}
              />
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
