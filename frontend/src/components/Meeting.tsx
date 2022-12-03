import { useApolloClient } from "@apollo/client";
import {
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Flex,
  Link,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MeetingDocument } from "../api/graphql";

export const Meeting = ({
  id,
  date,
  place,
  name,
}: {
  id: string;
  date: string;
  place: string;
  name: string;
}) => {
  const router = useRouter();
  const client = useApolloClient();

  return (
    <Center
      _hover={{
        transform: "scale(1.05)",
        cursor: "pointer",
        opacity: "0.8",
      }}
      onMouseOver={() => {
        router.prefetch(`/posiedzenie/${id}`);
        client.query({
          query: MeetingDocument,
          variables: {
            id,
          },
        });
      }}
      onClick={() => {
        router.push(`/posiedzenie/${id}`);
      }}
      transition="all 0.2s ease-in-out"
      transform="scale(1)"
      py={6}
      w="400px"
    >
      <Flex
        maxW={"445px"}
        w={"full"}
        shadow="lg"
        bg={useColorModeValue("white", "gray.900")}
        rounded={"md"}
        h="200px"
        p={6}
        overflow={"hidden"}
        flexDirection="column"
        justifyContent="space-between"
      >
        <Stack>
          <Text
            color={"blue.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {place}
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {name}
          </Heading>
        </Stack>
        <Stack mt={"auto"} direction={"row"} spacing={4} align={"center"}>
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text color={"gray.500"}>{date}</Text>
          </Stack>
        </Stack>
      </Flex>
    </Center>
  );
};
