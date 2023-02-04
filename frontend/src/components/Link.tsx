import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import type { ReactNode } from "react";
import React from "react";

export const Link = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <NextLink href={href}>
      <ChakraLink>{children}</ChakraLink>
    </NextLink>
  );
};
