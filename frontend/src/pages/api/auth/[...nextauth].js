import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import UsosProvider from "../../../providers/UsosProvider";

const options = {
    debug: true,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        UsosProvider({
            clientId: process.env.USOS_CLIENT_ID,
            clientSecret: process.env.USOS_CLIENT_SECRET,
        }),
    ],
    session: { strategy: "jwt" },
    callbacks: {
        async session({ session, token, user }) {
            session.jwt = token.jwt;
            session.id = token.id;
            return session;
        },
        async jwt({ token, user, account }) {
            const isSignIn = user ? true : false;
            if (isSignIn) {
                const params = new URLSearchParams();
                if (account.provider === 'usos') {
                    params.set('oauth_token', `${account?.oauth_token}`);
                    params.set('oauth_token_secret', `${account?.oauth_token_secret}`);
                } else {
                    params.set('access_token', `${account?.access_token}`);
                }
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/${account?.provider}/callback?${params.toString()}`
                );
                const data = await response.json();
                token.jwt = data.jwt;
                token.id = data.user.id;
            }
            return token
        }
    }
};

const Auth = (req, res) =>
    NextAuth(req, res, options);

export default Auth;