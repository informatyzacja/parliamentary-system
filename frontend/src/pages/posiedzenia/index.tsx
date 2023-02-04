import { usePagination } from "@ajna/pagination";
import {
  Box,
  Center,
  Heading,
  ScaleFade,
  Tooltip,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { format } from "date-fns";
import React, { useState } from "react";

import { useMeetingsQuery } from "@/api/graphql";
import { Loader } from "@/components/Loader";
import { Meeting } from "@/components/Meeting";
import { NoItems } from "@/components/NoItems";
import { Pagination } from "@/components/Pagination";
import TermOfOfficeSelector from "@/components/TermOfOfficeSelector";
import { useCurrentTermId } from "@/hooks/useCurrentTermId";
import { useErrorHandler } from "@/hooks/useErrorHandler";

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
        <Tooltip label="Kadencja">
          <Box mt={"1 !important"} mb={"4 !important"}>
            <TermOfOfficeSelector />
          </Box>
        </Tooltip>
        {meetingsQuery.loading ? <Loader /> : null}
        {meetings.length === 0 && !meetingsQuery.loading ? (
          <NoItems>Brak posiedzeń</NoItems>
        ) : null}
        <Wrap spacing={4} justify="center">
          {meetings.map((meeting) => (
            <WrapItem key={meeting.id}>
              <ScaleFade in={true}>
                <Meeting
                  id={meeting.id}
                  name={meeting.attributes.name}
                  place={meeting.attributes.place.replace(/_/, " ")}
                  date={format(
                    new Date(meeting.attributes.date as string),
                    "dd.MM.yyyy"
                  )}
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
