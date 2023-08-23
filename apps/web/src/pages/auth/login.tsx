import { WarningIcon } from '@chakra-ui/icons';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import type { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface Provider {
  id: string;
  name: string;
}

const providers: Provider[] = [
  {
    id: 'usos',
    name: 'USOS',
  },
];

function Login() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { error } = router.query;

  return (
    <Center>
      <VStack gap={4}>
        <Heading size="lg" mb={6}>
          {t('parliamentary-system')}
        </Heading>
        <Card minH="100%" minW="fit-content" align="center">
          <CardHeader>
            <Heading size="md">{t('login')}</Heading>
          </CardHeader>
          <Divider w="90%" borderColor="gray.200" />
          <CardBody>
            {providers.map((provider) => (
              <Button
                key={provider.id}
                size="lg"
                border="1px"
                borderColor="gray.300"
                leftIcon={
                  <Image
                    src={'/' + provider.name.toLowerCase() + '-logo.png'}
                    alt={provider.name}
                    height={10}
                  />
                }
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              >
                {t('login-with')} {provider.name}
              </Button>
            ))}
          </CardBody>
        </Card>
        {error ? (
          <Card minH="100%" backgroundColor="red.500" color="white">
            <CardBody>
              <HStack gap={4}>
                <WarningIcon w={6} h={6} alignSelf="start" />
                <VStack align="left" gap={1} maxW="100%">
                  <Text as="b">{t('error.title')}</Text>
                  <Text>{t('error.login-error')}</Text>
                </VStack>
              </HStack>
            </CardBody>
          </Card>
        ) : null}
      </VStack>
    </Center>
  );
}

export const getServerSideProps: GetServerSideProps<object> = async ({
  locale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'pl', ['common'])),
    },
  };
};

export default Login;
