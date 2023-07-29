import {
  Box,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';
import {
  FaFacebookF,
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
} from 'react-icons/fa';

import { SocialButton } from '@/components/misc/SocialButton';

export const Footer = () => {
  const { t } = useTranslation('common');
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');

  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      w="100vw"
    >
      <Container
        as={Stack}
        maxW="6xl"
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align="center"
      >
        <Text textAlign="center">
          Made with ❤️ by Komisja ds. Informatyzacji
        </Text>
        <Link
          href="https://status.samorzad.pwr.edu.pl/"
          p={2}
          fontSize="sm"
          fontWeight={500}
          color={linkColor}
          _hover={{
            color: linkHoverColor,
            textDecoration: 'underline',
          }}
          target="_blank"
        >
          {t('system-status')}
        </Link>
        <Stack direction="row" spacing={6}>
          <SocialButton label="WWW" href="https://samorzad.pwr.edu.pl/">
            <FaGlobe />
          </SocialButton>
          <SocialButton label="Email" href="mailto:samorzad@pwr.edu.pl">
            <FaRegEnvelope />
          </SocialButton>
          <SocialButton
            label="Facebook"
            href="https://www.facebook.com/SamorzadPWr/"
          >
            <FaFacebookF />
          </SocialButton>
          <SocialButton
            label="Instagram"
            href="https://www.instagram.com/samorzadpwr/"
          >
            <FaInstagram />
          </SocialButton>
          <SocialButton
            label="LinkedIn"
            href="https://www.linkedin.com/company/samorzad-studencki-pwr/"
          >
            <FaLinkedinIn />
          </SocialButton>
          <SocialButton
            label="GitHub"
            href="https://github.com/informatyzacja/parliamentary-system/"
          >
            <FaGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};
