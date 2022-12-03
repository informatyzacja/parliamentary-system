import { FC } from "react";
import { HStack, Button, Box, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

type PaginationProps = {
  current: number;
  pageCount: number;
  setCurrent: (page: number) => void;
};

export const Pagination: FC<PaginationProps> = ({
  current,
  pageCount,
  setCurrent,
}) => {
  if (pageCount <= 1) {
    return null;
  }

  const pagination = {
    prev: current > 1 && pageCount > 3,
    next: current < pageCount && pageCount > 3,
    items: [
      ...Array.from({ length: pageCount }, (_, i) => i + 1).slice(0, 2),
      ...(pageCount > 3 ? ["...", pageCount] : []),
    ],
  };

  return (
    <Box display="flex" justifyContent="flex-end">
      <HStack my="3" spacing="1">
        {pagination?.prev && (
          <IconButton
            aria-label="previous page"
            onClick={() => setCurrent(current - 1)}
            disabled={!pagination?.prev}
            variant="outline"
          >
            <ChevronLeftIcon />
          </IconButton>
        )}

        {pagination?.items.map((page) => {
          if (typeof page === "string") return <span key={page}>...</span>;

          return (
            <Button
              key={page}
              onClick={() => setCurrent(page)}
              variant={page === current ? "solid" : "outline"}
            >
              {page}
            </Button>
          );
        })}
        {pagination?.next && (
          <IconButton
            aria-label="next page"
            onClick={() => setCurrent(current + 1)}
            variant="outline"
          >
            <ChevronRightIcon />
          </IconButton>
        )}
      </HStack>
    </Box>
  );
};
