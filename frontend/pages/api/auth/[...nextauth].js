import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
};

const Auth = (req, res) =>
    NextAuth(req, res, options);

export default Auth;