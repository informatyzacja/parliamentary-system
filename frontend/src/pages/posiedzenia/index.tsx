import { useState } from "react";
import { format } from "date-fns";
import React from "react";
import { Loader } from "../../components/Loader";
import {
  Box,
  Center,
  Heading,
  ScaleFade,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Meeting } from "../../components/Meeting";
import { useMeetingsQuery } from "../../api/graphql";
import { Pagination } from "../../components/Pagination";
import { NoItems } from "../../components/NoItems";
import { useErrorHandler } from "../../hooks/useErrorHandler";
import { useCurrentTermId } from "../../hooks/useCurrentTermId";
import { usePagination } from "@ajna/pagination";

export default function Meetings() {
  const [currentTermId] = useCurrentTermId();
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
  const errorHandler = useErrorHandler();
  const meetingsQuery = useMeetingsQuery({
    variables: {
      termId: currentTermId ?? "",
      pageSize: pagination.pageSize,
      page: pagination.currentPage,
    },
    onError: errorHandler,
    onCompleted(data) {
      setTotalPages(data.meetings.meta.pagination.pageCount);
    },
    skip: !currentTermId,
  });

  const pageCount = meetingsQuery.data?.meetings.meta.pagination.pageCount ?? 1;

  const meetings = meetingsQuery.data?.meetings.data ?? [];

  return (
    <Center>
      <VStack>
        <Box mb={8}>
          <Heading size="lg">Posiedzenia parlamentu</Heading>
        </Box>
        {meetingsQuery.loading ? <Loader /> : null}
        {meetings.length === 0 && !meetingsQuery.loading ? (
          <NoItems>Brak posiedzień</NoItems>
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
          pages={pagination.pages}
          current={pagination.currentPage}
          pageCount={pageCount}
          setCurrent={pagination.setCurrentPage}
        />
      </VStack>
    </Center>
  );
}
