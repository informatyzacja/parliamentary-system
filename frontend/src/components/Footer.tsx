import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import type { ReactNode } from "react";
import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target="_blank"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      w="100vw"
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align="center"
      >
        <Text textAlign="center">
          Made with ❤️ by Komisja ds. Informatyzacji
        </Text>
        <Link
          href={"https://status.samorzad.pwr.edu.pl/"}
          p={2}
          fontSize={"sm"}
          fontWeight={500}
          color={linkColor}
          _hover={{
            color: linkHoverColor,
            textDecoration: "underline",
          }}
          target="_blank"
        >
          {"Status systemów"}
        </Link>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"WWW"} href={"https://samorzad.pwr.edu.pl/"}>
            <FaGlobe />
          </SocialButton>
          <SocialButton label={"Email"} href={"mailto:samorzad@pwr.edu.pl"}>
            <FaRegEnvelope />
          </SocialButton>
          <SocialButton
            label={"Facebook"}
            href={"https://www.facebook.com/SamorzadPWr/"}
          >
            <FaFacebookF />
          </SocialButton>
          <SocialButton
            label={"Instagram"}
            href={"https://www.instagram.com/samorzadpwr/"}
          >
            <FaInstagram />
          </SocialButton>
          <SocialButton
            label={"LinkedIn"}
            href={"https://www.linkedin.com/company/samorzad-studencki-pwr/"}
          >
            <FaLinkedinIn />
          </SocialButton>
          <SocialButton
            label={"GitHub"}
            href={"https://github.com/informatyzacja/parliamentary-system/"}
          >
            <FaGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};
