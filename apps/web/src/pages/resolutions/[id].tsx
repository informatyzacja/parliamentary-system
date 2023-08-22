import { DownloadIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/next-js';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  chakra,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import type { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import * as process from 'process';
import React from 'react';

import { useResolutionQuery } from '@/api/graphql';
import { Loader } from '@/components/layout/Loader';

const Object = chakra('object');

const ResolutionPage = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { id } = router.query;

  const resolutionQuery = useResolutionQuery({
    variables: {
      id: (id as string | undefined) ?? '',
    },
  });

  const resolution = resolutionQuery.data?.resolution.data;
  const mainDocument = resolution?.attributes.document.data ?? undefined;
  const attachments = resolution?.attributes.attachments.data ?? [];

  return (
    <Center>
      {resolutionQuery.loading ? (
        <Loader />
      ) : (
        <VStack>
          <VStack>
            <Heading size="lg">{resolution?.attributes.name}</Heading>
            <Text fontSize="md" mb={8}>
              {resolution?.attributes.meeting.data
                ? resolution.attributes.meeting.data.attributes.name
                : t('resolution.circulation-vote')}
            </Text>
          </VStack>
          <Flex
            flexDirection={{ base: 'column', lg: 'row' }}
            alignItems="stretch"
            gap={4}
            w={{ base: '90vw', lg: '70vw' }}
          >
            <Card flex={1} minH={mainDocument ? '90vh' : 'fit-content'}>
              <CardHeader pb={0}>
                <Flex alignItems="center">
                  <Heading size="md" flex={1}>
                    {t('resolution.main-document')}
                  </Heading>
                  {mainDocument ? (
                    <Link
                      href={
                        process.env.NEXT_PUBLIC_API_URL +
                        mainDocument.attributes.url
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
              <CardBody px={0} pb={0}>
                {mainDocument ? (
                  <Object
                    type="application/pdf"
                    data={
                      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                      process.env.NEXT_PUBLIC_API_URL! +
                      mainDocument.attributes.url
                    }
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
                  <Text textAlign="center">
                    {t('resolution.no-main-document')}
                  </Text>
                )}
              </CardBody>
            </Card>
            <VStack gap={4} w={{ base: '90vw', lg: '25vw' }}>
              <Card w="100%">
                <CardHeader pb={0}>
                  <Heading size="md">{t('resolution.information')}</Heading>
                </CardHeader>
                <CardBody>
                  <UnorderedList>
                    <ListItem>
                      <Flex>
                        <Text flex={1}>
                          {t('resolution.date-of-publication')}:
                        </Text>
                        <Text>
                          {format(
                            new Date(
                              resolution?.attributes.publishedAt as string,
                            ),
                            'dd/MM/yyyy',
                          )}
                        </Text>
                      </Flex>
                    </ListItem>
                  </UnorderedList>
                </CardBody>
              </Card>
              <Card w="100%">
                <CardHeader pb={0}>
                  <Heading size="md">{t('resolution.attachments')}</Heading>
                </CardHeader>
                <CardBody overflowY="scroll">
                  <List spacing={4}>
                    {attachments.length ? (
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
            </VStack>
          </Flex>
        </VStack>
      )}
    </Center>
  );
};

export const getServerSideProps: GetServerSideProps<object> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'pl', ['common'])),
  },
});

export default ResolutionPage;
