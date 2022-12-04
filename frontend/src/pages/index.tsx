import { Button, Center, Text, VStack } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session?.user) {
    return (
      <>
        <Center>
          <VStack spacing={4}>
            <Text>Zalogowany/a jako {session.user.email}</Text>
            <Button onClick={() => signOut()}>Wyloguj się</Button>
          </VStack>
        </Center>
      </>
    );
  }
  return (
    <>
      <Center>
        <VStack>
          <Text>Nie jesteś zalogowany/a</Text>
        </VStack>
      </Center>
    </>
  );
}
