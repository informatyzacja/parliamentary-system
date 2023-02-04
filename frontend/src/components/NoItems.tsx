import { InfoOutlineIcon } from "@chakra-ui/icons";
import { ScaleFade,Text, VStack } from "@chakra-ui/react";
import type { ReactNode } from "react";
import React from "react";

export const NoItems = ({ children }: { children: ReactNode }) => {
  return (
    <ScaleFade in={true}>
      <VStack>
        <InfoOutlineIcon mt={2} />
        <Text size="md">{children}</Text>
      </VStack>
    </ScaleFade>
  );
};
