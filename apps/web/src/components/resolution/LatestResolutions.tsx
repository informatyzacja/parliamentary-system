import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/next-js';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { useTranslation } from 'next-i18next';
import React from 'react';

import type { ResolutionEntity } from '@/api/graphql';

export const LatestResolutions = ({
  resolutions,
}: {
  resolutions: ResolutionEntity[];
}) => {
  const { t } = useTranslation('common');

  return (
    <Card w={{ base: '90vw', lg: '40vw' }} minH="100%">
      <CardHeader>
        <Heading size="md">{t('last-resolutions')}</Heading>
      </CardHeader>
      <CardBody>
        <Flex flexDirection="column">
          {resolutions.slice(0, 5).map((resolution) => (
            <Box key={resolution.id}>
              <Divider />
              <Flex gap={5} flex={1} alignItems="center" px={5} py={2.5}>
                <Box
                  textAlign="left"
                  minWidth="20%"
                  display={{ base: 'none', md: 'block' }}
                >
                  {format(
                    new Date(resolution.attributes.date as string),
                    'dd/MM/yyyy',
                  )}
                </Box>
                <Box textAlign="left" flex={1}>
                  {resolution.attributes.name}
                </Box>
                <Box maxWidth="fit-content" justifySelf="right">
                  <Link href={`/resolutions/${resolution.id}`}>
                    <Button leftIcon={<ArrowForwardIcon />} size="sm">
                      {t('more')}
                    </Button>
                  </Link>
                </Box>
              </Flex>
            </Box>
          ))}
          <Divider />
        </Flex>
      </CardBody>
    </Card>
  );
};
