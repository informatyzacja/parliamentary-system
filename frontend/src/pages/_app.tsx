import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'jotai';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { Session as NextAuthSession } from 'next-auth';
import { getSession, SessionProvider } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next';

import config from '@/config';

import Layout from '../components/Layout';
import { theme } from '../styles/theme';

/**
 * JWT token is coming from api/auth/[...nextauth]
 */
declare module 'next-auth' {
  interface Session {
    jwt: string;
  }
}

const httpLink = createHttpLink({
  uri: config.NEXT_PUBLIC_API_URL + '/graphql',
});

const authLink = setContext(
  async (_, { headers }: { headers?: { [key: string]: string } }) => {
    const session = await getSession();

    if (session === null) {
      return headers;
    }

    return {
      headers: {
        ...headers,

        authorization: `Bearer ${session.jwt}`,
      },
    };
  },
);

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: NextAuthSession }>) {
  return (
    <SessionProvider session={session}>
      <Provider>
        <ApolloProvider client={client}>
          <ChakraProvider theme={theme}>
            <Head>
              <title>System parlamentarny</title>
              <meta
                name="description"
                content="System parlamentarny do zarządzania posiedzeniami, uchwałami oraz strukturą organizacyjną"
              />
            </Head>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ChakraProvider>
        </ApolloProvider>
      </Provider>
    </SessionProvider>
  );
}

export default appWithTranslation(MyApp);
