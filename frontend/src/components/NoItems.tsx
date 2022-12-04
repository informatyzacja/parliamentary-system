import { InfoOutlineIcon } from "@chakra-ui/icons";
import { VStack, Text, ScaleFade } from "@chakra-ui/react";
import React, { ReactNode } from "react";

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
