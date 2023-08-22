import { Center, Text } from '@chakra-ui/react';
import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

function Error404Page() {
  return (
    <Center>
      <Text fontSize="6xl" as="b">
        404
      </Text>
    </Center>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'pl', ['common'])),
  },
});

export default Error404Page;
