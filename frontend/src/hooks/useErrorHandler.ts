import { ApolloError } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

export const useErrorHandler = () => {
  const toast = useToast({
    title: "Błąd",
    status: "error",
    isClosable: true,
  });

  return useCallback(
    (error: ApolloError) => {
      const errorMessage = error.message;
      const isForbidden = error.graphQLErrors.some(
        (x) => x.extensions?.code === "FORBIDDEN"
      );

      toast({
        title: "Błąd",
        description: isForbidden ? "Nie posiadasz uprawnień" : errorMessage,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    },
    [toast]
  );
};
