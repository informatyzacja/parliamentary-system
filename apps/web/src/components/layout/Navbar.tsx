import { useApolloClient } from '@apollo/client';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/next-js';
import {
  Avatar,
  Box,
  Button,
  Center,
  Collapse,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import type { DocumentNode } from 'graphql';
import { useAtomValue } from 'jotai';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';

import {
  LatestMeetingsAndResolutionsDocument,
  MeetingsDocument,
  ResolutionsDocument,
  StudentsDocument,
} from '@/api/graphql';
import { termOfOfficeIdAtom } from '@/atoms/termOfOffice.atom';
import { LanguageSwitcher } from '@/components/i18n/LanguageSwitcher';

export const Navbar = () => {
  const { t } = useTranslation('common');
  const { isOpen, onToggle } = useDisclosure();
  const { status, data } = useSession();
  const router = useRouter();

  return (
    <Box
      mb={2}
      w="100%"
      px={{ base: 0, md: 16 }}
      py={4}
      borderBottom="solid 1px"
      borderColor="gray.200"
      shadow="base"
      backgroundColor="white"
    >
      <Flex
        color="gray.600"
        minH="60px"
        mx="auto"
        py={{ base: 2 }}
        px={{ base: 4 }}
        align="center"
      >
        {status === 'authenticated' ? (
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant="ghost"
              aria-label={t('aria.toggle-navigation')}
            />
          </Flex>
        ) : null}

        <Flex flex={1} justify={{ base: 'center', md: 'space-between' }}>
          <NextLink href="/" passHref={true}>
            <Image
              src="/logo.svg"
              loading="eager"
              width="200"
              height="50"
              style={{
                cursor: 'pointer',
              }}
              alt={t('aria.students-union-logo')}
            />
          </NextLink>
          {status === 'authenticated' ? (
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          ) : null}
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          spacing={6}
        >
          {status === 'authenticated' ? (
            <Box ml={4} display="flex">
              <Menu direction="rtl" placement="bottom-start" autoSelect={false}>
                <MenuButton
                  as={Button}
                  rounded="full"
                  variant="link"
                  cursor="pointer"
                  minW={0}
                  border="2px solid transparent"
                  _hover={{
                    border: '2px solid black',
                  }}
                  aria-label={t('aria.user-menu') as string | undefined}
                >
                  <Avatar size="sm" />
                </MenuButton>
                <MenuList alignItems="center" p={3}>
                  <Center>{data.user?.name ?? ''}</Center>
                  <Center>({data.user?.email?.split('@')[0]})</Center>
                  <MenuDivider />
                  <LanguageSwitcher />
                  <MenuDivider />
                  <MenuItem
                    onClick={() => {
                      void signOut().then(() => {
                        void router.push('/');
                      });
                    }}
                  >
                    {t('logout')}
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          ) : null}
        </Stack>
      </Flex>
      {status === 'authenticated' ? (
        <Collapse in={isOpen} animateOpacity={true}>
          <MobileNav onToggle={onToggle} />
        </Collapse>
      ) : null}
    </Box>
  );
};

const DesktopNav = () => {
  const { t } = useTranslation('common');
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const termOfOffice = useAtomValue(termOfOfficeIdAtom);
  const client = useApolloClient();

  return (
    <Stack direction="row" spacing={6}>
      {NAV_ITEMS.map((navItem) => (
        <Center key={navItem.label}>
          <Link
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
            fontSize="sm"
            fontWeight={500}
            color={linkColor}
            _hover={{
              color: linkHoverColor,
            }}
          >
            {t(navItem.label)}
          </Link>
        </Center>
      ))}
    </Stack>
  );
};

const MobileNav = (mobileProps: MobileProps) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      zIndex={1}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} {...mobileProps} />
      ))}
    </Stack>
  );
};

const MobileNavItem = (mobileNavProps: MobileProps & NavItem) => {
  const { label, href } = mobileNavProps;
  const { onToggle } = mobileNavProps;
  const { t } = useTranslation('common');
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        justify="space-between"
        align="center"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Link
          href={href}
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
          onClick={onToggle}
        >
          {t(label)}
        </Link>
      </Flex>
    </Stack>
  );
};

interface MobileProps {
  onToggle: () => void;
}

interface NavItem {
  label: string;
  subLabel?: string;
  prefetch?: DocumentNode;
  children?: NavItem[];
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    label: 'latest-updates',
    href: '/',
    prefetch: LatestMeetingsAndResolutionsDocument,
  },
  {
    label: 'meeting.title-plural',
    href: '/meetings',
    prefetch: MeetingsDocument,
  },
  {
    label: 'resolutions',
    href: '/resolutions',
    prefetch: ResolutionsDocument,
  },
  {
    label: 'organisation-structure',
    href: '/structure',
    prefetch: StudentsDocument,
  },
];
