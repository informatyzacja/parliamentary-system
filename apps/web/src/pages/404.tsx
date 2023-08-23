import { Center, Text } from '@chakra-ui/react';
import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function Error404Page() {
  return (
    <Center>
      <Text fontSize="6xl" as="b">
        404
      </Text>
    </Center>
  );
}

export const getStaticProps: GetStaticProps<object> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'pl', ['common'])),
  },
});

export default Error404Page;
