import { DownloadIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/next-js';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  chakra,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';

import type { UploadFileEntity } from '@/api/graphql';
import type { Optional } from '@/types/Optional';

const Object = chakra('object');

export const MainDocument = ({
  mainDocument,
}: {
  mainDocument: Optional<UploadFileEntity>;
}) => {
  const { t } = useTranslation('common');

  return (
    <Card flex={1} minH={mainDocument ? '90vh' : 'fit-content'}>
      <CardHeader pb={0}>
        <Flex alignItems="center">
          <Heading size="md" flex={1}>
            {t('resolution.main-document')}
          </Heading>
          {mainDocument ? (
            <Link
              href={
                process.env.NEXT_PUBLIC_API_URL + mainDocument.attributes.url
              }
              target="_blank"
            >
              <Button
                leftIcon={<DownloadIcon />}
                size={{ base: 'sm', md: 'md' }}
              >
                {t('Download')}
              </Button>
            </Link>
          ) : (
            <Button
              leftIcon={<DownloadIcon />}
              size={{ base: 'sm', md: 'md' }}
              isDisabled={true}
            >
              {t('Download')}
            </Button>
          )}
        </Flex>
      </CardHeader>
      <CardBody px={0} pb={mainDocument ? 0 : 5}>
        {mainDocument ? (
          <Object
            type="application/pdf"
            data={process.env.NEXT_PUBLIC_API_URL + mainDocument.attributes.url}
            aria-label={mainDocument.attributes.name}
            w="100%"
            h="90vh"
            mb={0}
            pb={0}
            borderBottomRadius="md"
          >
            {mainDocument.attributes.name}
          </Object>
        ) : (
          <Text textAlign="center">{t('resolution.no-main-document')}</Text>
        )}
      </CardBody>
    </Card>
  );
};
