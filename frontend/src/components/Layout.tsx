import React from "react";
import { Navbar } from "./Navbar";
import { Box, Container, Flex, VStack, chakra } from "@chakra-ui/react";
import { Footer } from "./Footer";

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
