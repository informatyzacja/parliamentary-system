import { Center, chakra, Container, Text, VStack } from "@chakra-ui/react";
import { Lato } from "@next/font/google";
import { useSession } from "next-auth/react";
import type React from "react";

import { Footer } from "./Footer";
import { Loader } from "./Loader";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export default function Layout({ children }: LayoutProps) {
  const { status } = useSession();

  return (
    <VStack minH="100vh" spacing={8} className={`${lato.variable}`}>
      <Navbar />
      <Container maxW="container.xl" flex={1} display="flex" flexDir="column">
        <chakra.main>
          <>
            {status === "authenticated" ? children : null}
            {status === "loading" ? <Loader /> : null}
            {status === "unauthenticated" ? (
              <Center>
                <Text>Aby korzystać z aplikacji musisz się zalogować</Text>
              </Center>
            ) : null}
          </>
        </chakra.main>
      </Container>
      <Footer />
    </VStack>
  );
}
