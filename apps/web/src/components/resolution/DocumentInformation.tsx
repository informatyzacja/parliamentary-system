import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { useTranslation } from 'next-i18next';
import React from 'react';

import type { ResolutionEntity } from '@/api/graphql';

export const DocumentInformation = ({
  resolution,
}: {
  resolution: ResolutionEntity;
}) => {
  const { t } = useTranslation('common');

  return (
    <Card w="100%">
      <CardHeader pb={0}>
        <Heading size="md">{t('resolution.information')}</Heading>
      </CardHeader>
      <CardBody>
        <UnorderedList>
          <ListItem>
            <Flex>
              <Text flex={1}>{t('resolution.date-of-publication')}:</Text>
              <Text>
                {format(
                  new Date(resolution.attributes.date as string),
                  'dd/MM/yyyy HH:mm:ss',
                )}
              </Text>
            </Flex>
          </ListItem>
        </UnorderedList>
      </CardBody>
    </Card>
  );
};
