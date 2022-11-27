import 'tailwindcss/tailwind.css';
import Layout from '../components/layout';
import '../styles/globals.css';
import { SessionProvider, getSession } from "next-auth/react";
import axios from 'axios';
import urlJoin from 'url-join';

axios.defaults.baseURL = urlJoin(process.env['NEXT_PUBLIC_API_URL']!, 'api');

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

function MyApp({ Component, pageProps: { session, ...pageProps }, }: { Component: any, pageProps: any }) {
  return <SessionProvider session={session}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </SessionProvider>;
}

export default MyApp;
