import { Center, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import type { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import type { ResolutionEntity, UploadFileEntity } from '@/api/graphql';
import { useResolutionQuery } from '@/api/graphql';
import { Loader } from '@/components/layout/Loader';
import { DocumentInformation } from '@/components/resolution/DocumentInformation';
import { MainDocument } from '@/components/resolution/MainDocument';
import { ResolutionAttachments } from '@/components/resolution/ResolutionAttachments';
import type { Optional } from '@/types/Optional';

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
  const mainDocument = (resolution?.attributes.document.data ??
    undefined) as Optional<UploadFileEntity>;
  const attachments = (resolution?.attributes.attachments.data ??
    undefined) as Optional<UploadFileEntity[]>;

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
            <MainDocument mainDocument={mainDocument} />
            <VStack gap={4} w={{ base: '90vw', lg: '25vw' }}>
              <DocumentInformation
                resolution={resolution as ResolutionEntity}
              />
              <ResolutionAttachments attachments={attachments} />
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
