import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import UsosProvider from '@/providers/UsosProvider';

import serverConfig from '@/config.server';
import config from '@/config';

const providers = [];

if (serverConfig.GOOGLE_CLIENT_ID && serverConfig.GOOGLE_CLIENT_SECRET) {
  providers.push(
    GoogleProvider({
      clientId: serverConfig.GOOGLE_CLIENT_ID,
      clientSecret: serverConfig.GOOGLE_CLIENT_SECRET,
    }),
  );
}

if (serverConfig.USOS_CLIENT_ID && serverConfig.USOS_CLIENT_SECRET) {
  providers.push(
    UsosProvider({
      clientId: serverConfig.USOS_CLIENT_ID,
      clientSecret: serverConfig.USOS_CLIENT_SECRET,
      usosBaseUrl: serverConfig.USOS_BASE_URL,
      publicUrl: serverConfig.NEXTAUTH_URL,
      usosScopes: serverConfig.USOS_SCOPES,
      usosFields: serverConfig.USOS_FIELDS,
    }),
  );
}

if (providers.length === 0) {
  throw new Error(
    'No authentication providers configured. Please configure at least one provider.',
  );
}

const options = {
  providers,
  session: { strategy: 'jwt' },
  callbacks: {
    async session({ session, token, user }) {
      session.jwt = token.jwt;
      session.id = token.id;
      return session;
    },
    async jwt({ token, user, account }) {
      const isSignIn = !!user;
      if (isSignIn) {
        const params = new URLSearchParams();
        if (account.provider === 'usos') {
          params.set('oauth_token', `${account?.oauth_token}`);
          params.set('oauth_token_secret', `${account?.oauth_token_secret}`);
        } else {
          params.set('access_token', `${account?.access_token}`);
        }
        const response = await fetch(
          `${config.NEXT_PUBLIC_API_URL}/api/auth/${
            account?.provider
          }/callback?${params.toString()}`,
        );
        const data = await response.json();
        token.jwt = data.jwt;
        token.id = data.user.id;
      }
      return token;
    },
  },
};

const Auth = (req, res) => NextAuth(req, res, options);

export default Auth;
