import { FC } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Pagination as AjnaPagination,
  PaginationContainer,
  PaginationNext,
  PaginationPage,
  PaginationPageGroup,
  PaginationPrevious,
} from "@ajna/pagination";

type PaginationProps = {
  current: number;
  pageCount: number;
  setCurrent: (page: number) => void;
  pages: number[];
};

export const Pagination: FC<PaginationProps> = ({
  current,
  pageCount,
  setCurrent,
  pages,
}) => {
  return (
    <AjnaPagination
      pagesCount={pageCount}
      currentPage={current}
      onPageChange={setCurrent}
    >
      <PaginationContainer align="center" justify="center" p={4} w="full">
        <PaginationPrevious mr={2}>
          <ChevronLeftIcon />
        </PaginationPrevious>
        <PaginationPageGroup align="center">
          {pages.map((page: number) => (
            <PaginationPage
              w="10"
              key={`pagination_page_${page}`}
              page={page}
              _current={{
                bg: "gray.300",
                _hover: {
                  bg: "gray.400",
                },
              }}
            />
          ))}
        </PaginationPageGroup>
        <PaginationNext ml={2}>
          <ChevronRightIcon />
        </PaginationNext>
      </PaginationContainer>
    </AjnaPagination>
  );
};
