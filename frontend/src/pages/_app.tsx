import Layout from "../components/Layout";
import { SessionProvider, getSession } from "next-auth/react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { Provider } from "jotai";
import { theme } from "../styles/theme";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL + "/graphql",
});

const authLink = setContext(async (_, { headers }) => {
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
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: {
  Component: any;
  pageProps: any;
}) {
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

export default MyApp;
