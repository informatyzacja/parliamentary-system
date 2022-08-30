import 'tailwindcss/tailwind.css';
import Layout from '../components/layout';
import '../styles/globals.css';
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  return <SessionProvider session={session}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </SessionProvider>;
}

export default MyApp;
