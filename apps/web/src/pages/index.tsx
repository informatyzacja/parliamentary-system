import { Center, Flex, Heading, ScaleFade, VStack } from '@chakra-ui/react';
import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import type { MeetingEntity, ResolutionEntity } from '@/api/graphql';
import { useLatestMeetingsAndResolutionsQuery } from '@/api/graphql';
import { Loader } from '@/components/layout/Loader';
import { NoItems } from '@/components/layout/NoItems';
import { LatestMeetings } from '@/components/meeting/LatestMeetings';
import { LatestResolutions } from '@/components/resolution/LatestResolutions';
import { useErrorHandler } from '@/hooks/useErrorHandler';

function LatestUpdates() {
  const { t } = useTranslation('common');
  const errorHandler = useErrorHandler();
  const latestUpdatesQuery = useLatestMeetingsAndResolutionsQuery({
    onError: errorHandler,
  });

  const meetings = (latestUpdatesQuery.data?.meetings.data ??
    []) as MeetingEntity[];
  const resolutions = (latestUpdatesQuery.data?.resolutions.data ??
    []) as ResolutionEntity[];

  if (latestUpdatesQuery.loading) {
    return <Loader />;
  }

  if (
    latestUpdatesQuery.data?.meetings.data.length === 0 &&
    latestUpdatesQuery.data.resolutions.data.length === 0
  ) {
    return <NoItems>{t('no-news')}</NoItems>;
  }

  return (
    <Center>
      <VStack>
        <Heading size="lg" mb={8}>
          {t('latest-updates')}
        </Heading>
        <ScaleFade in={latestUpdatesQuery.data !== undefined}>
          <Flex
            flexDirection={{ base: 'column', lg: 'row' }}
            alignItems={['center', 'stretch']}
            gap="8"
          >
            <LatestMeetings meetings={meetings} />
            <LatestResolutions resolutions={resolutions} />
          </Flex>
        </ScaleFade>
      </VStack>
    </Center>
  );
}

export const getStaticProps: GetStaticProps<object> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'pl', ['common'])),
  },
});

export default LatestUpdates;
