import { chakra, Container, VStack } from "@chakra-ui/react";
import type React from "react";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <VStack minH="100vh" spacing={8}>
      <Container maxW="container.xl" flex={1} display="flex" flexDir="column">
        <Navbar />
        <chakra.main>{children}</chakra.main>
      </Container>
      <Footer />
    </VStack>
  );
}
