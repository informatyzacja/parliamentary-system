import { DownloadIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/next-js';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';

import type { UploadFileEntity } from '@/api/graphql';
import type { Optional } from '@/types/Optional';

export const ResolutionAttachments = ({
  attachments,
}: {
  attachments: Optional<UploadFileEntity[]>;
}) => {
  const { t } = useTranslation('common');

  return (
    <Card w="100%">
      <CardHeader pb={0}>
        <Heading size="md">{t('resolution.attachments')}</Heading>
      </CardHeader>
      <CardBody overflowY="scroll">
        <List spacing={4}>
          {attachments?.length ? (
            attachments.map((attachment) => (
              <ListItem key={attachment.id}>
                <Flex alignItems="center">
                  <Text flex={1} mr={8} overflowX="hidden">
                    {attachment.attributes.name}
                  </Text>
                  <Link
                    href={
                      process.env.NEXT_PUBLIC_API_URL +
                      attachment.attributes.url
                    }
                    target="_blank"
                  >
                    <Button leftIcon={<DownloadIcon />} size="sm">
                      {t('Download')}
                    </Button>
                  </Link>
                </Flex>
              </ListItem>
            ))
          ) : (
            <Center>{t('resolution.no-attachments')}</Center>
          )}
        </List>
      </CardBody>
    </Card>
  );
};
