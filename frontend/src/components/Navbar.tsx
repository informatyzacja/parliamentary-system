import { useApolloClient } from "@apollo/client";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Collapse,
  Flex,
  IconButton,
  Link,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import type { DocumentNode } from "graphql";
import { useAtomValue } from "jotai";
import Image from "next/image";
import NextLink from "next/link";
import { signIn, useSession } from "next-auth/react";

import {
  LatestMeetingsAndResolutionsDocument,
  MeetingsDocument,
  ResolutionsDocument,
  StudentsDocument,
} from "../api/graphql";
import { termOfOfficeIdAtom } from "../atoms/termOfOffice.atom";

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { status } = useSession();

  return (
    <Box mb={16}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        maxW="container.xl"
        mt={4}
        mx="auto"
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={1} justify={{ base: "center", md: "space-between" }}>
          <NextLink href="/" passHref>
            <Image
              src="/logo.svg"
              width="200"
              height="50"
              style={{
                cursor: "pointer",
              }}
              alt="Logo samorządu"
            />
          </NextLink>
          {status === "authenticated" ? (
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          ) : null}
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {status === "unauthenticated" ? (
            <Button
              onClick={() => {
                void signIn();
              }}
            >
              Zaloguj się
            </Button>
          ) : null}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const termOfOffice = useAtomValue(termOfOfficeIdAtom);
  const client = useApolloClient();

  return (
    <Stack direction={"row"} spacing={6}>
      {NAV_ITEMS.map((navItem) => (
        <Center key={navItem.label}>
          <Link
            as={NextLink}
            href={navItem.href}
            onMouseOver={() => {
              if (navItem.prefetch && termOfOffice) {
                void client.query({
                  query: navItem.prefetch,
                  variables: {
                    termId: termOfOffice,
                    pagination: {
                      page: 1,
                      pageSize: 10,
                    },
                  },
                });
              }
            }}
            p={2}
            fontSize={"sm"}
            fontWeight={500}
            color={linkColor}
            _hover={{
              color: linkHoverColor,
            }}
          >
            {navItem.label}
          </Link>
        </Center>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      zIndex={1}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }: NavItem) => {
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Link
          as={NextLink}
          href={href}
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Link>
      </Flex>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  prefetch?: DocumentNode;
  children?: NavItem[];
  href?: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Aktualności",
    href: "/aktualnosci",
    prefetch: LatestMeetingsAndResolutionsDocument,
  },
  {
    label: "Posiedzenia",
    href: "/posiedzenia",
    prefetch: MeetingsDocument,
  },
  {
    label: "Uchwały",
    href: "/uchwaly",
    prefetch: ResolutionsDocument,
  },
  {
    label: "Struktura organizacyjna",
    href: "/struktura",
    prefetch: StudentsDocument,
  },
];
