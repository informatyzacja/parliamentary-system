import React, { ReactNode } from "react";
import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";

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
