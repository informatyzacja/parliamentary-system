import { chakra, Container, VStack } from "@chakra-ui/react";
import { Lato } from "@next/font/google";
import type React from "react";

import { Footer } from "./Footer";
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
  return (
    <VStack minH="100vh" spacing={8} className={`${lato.variable}`}>
      <Container maxW="container.xl" flex={1} display="flex" flexDir="column">
        <Navbar />
        <chakra.main>{children}</chakra.main>
      </Container>
      <Footer />
    </VStack>
  );
}
