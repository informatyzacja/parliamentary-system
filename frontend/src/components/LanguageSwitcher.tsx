import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useCallback } from 'react';

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const router = useRouter();

  const availableLanguages = ['pl', 'en'];

  const toast = useToast({
    title: t('error.title'),
    status: 'error',
    isClosable: true,
  });

  const onError = () => {
    toast({
      description: t('error.change-language-error'),
      duration: 5000,
    });
  };

  const switchToLanguage = useCallback(
    (locale: string) => {
      const path = router.asPath;

      return router.push(path, path, { locale });
    },
    [router],
  );

  return (
    <Menu placement={'left-start'}>
      <MenuButton
        px={15}
        py={7.5}
        color={linkColor}
        _hover={{
          color: linkHoverColor,
        }}
      >
        {t(`languages.${i18n.language}.flag`)}{' '}
        {t(`languages.${i18n.language}.name`)}
        <ChevronDownIcon />
      </MenuButton>
      <MenuList minW={0} w={'fit-content'}>
        {availableLanguages.map((language) => (
          <MenuItem
            key={language}
            isDisabled={i18n.language === language}
            onClick={() => {
              switchToLanguage(language).catch(() => {
                onError();
              });
            }}
          >
            {t(`languages.${language}.flag`)} {t(`languages.${language}.name`)}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
