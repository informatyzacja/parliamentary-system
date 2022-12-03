// import "tailwindcss/tailwind.css";
import Layout from "../components/layout";
import { SessionProvider, getSession } from "next-auth/react";
import axios from "axios";
import urlJoin from "url-join";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
import { ChakraProvider } from "@chakra-ui/react";

axios.defaults.baseURL = urlJoin(process.env["NEXT_PUBLIC_API_URL"]!, "api");

axios.interceptors.request.use(async (request) => {
    const session: any = await getSession();
    if (request.headers) {
        request.headers["Authorization"] = `Bearer ${session.jwt}`;
    }
    return request;
});

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.log(error);
    }
);

const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL + "/graphql",
});

const authLink = setContext(async (_, { headers }) => {
    // get the authentication token from local storage if it exists

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
            <ApolloProvider client={client}>
                <ChakraProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ChakraProvider>
            </ApolloProvider>
        </SessionProvider>
    );
}

export default MyApp;
