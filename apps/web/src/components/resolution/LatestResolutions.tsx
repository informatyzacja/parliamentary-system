import { DownloadIcon } from '@chakra-ui/icons';
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

import type { ResolutionEntity, UploadFileEntity } from '@/api/graphql';
import type { Optional } from '@/types/Optional';

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
            <>
              <Divider />
              <Flex
                key={resolution.id}
                gap={5}
                flex={1}
                alignItems="center"
                px={5}
                py={2.5}
              >
                <Box
                  textAlign="left"
                  minWidth="20%"
                  display={{ base: 'none', md: 'block' }}
                >
                  {format(
                    new Date(resolution.attributes.publishedAt as string),
                    'dd/MM/yyyy',
                  )}
                </Box>
                <Box textAlign="left" flex={1}>
                  {resolution.attributes.name}
                </Box>
                <Box maxWidth="fit-content" justifySelf="right">
                  {(resolution.attributes.document
                    .data as Optional<UploadFileEntity>) ? (
                    <Link
                      href={
                        process.env.NEXT_PUBLIC_API_URL +
                        resolution.attributes.document.data.attributes.url
                      }
                      target="_blank"
                    >
                      <Button leftIcon={<DownloadIcon />} size="sm">
                        {t('Download')}
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      leftIcon={<DownloadIcon />}
                      size="sm"
                      isDisabled={true}
                    >
                      {t('Download')}
                    </Button>
                  )}
                </Box>
              </Flex>
            </>
          ))}
          <Divider />
        </Flex>
      </CardBody>
    </Card>
  );
};
