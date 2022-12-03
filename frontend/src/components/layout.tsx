import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import { Container } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container maxW="container.xl">
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
}
