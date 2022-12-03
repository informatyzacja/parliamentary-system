import React from "react";
import { Navbar } from "./Navbar";
import { Container } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container maxW="container.xl" pb={16}>
      <Navbar />
      {children}
    </Container>
  );
}
