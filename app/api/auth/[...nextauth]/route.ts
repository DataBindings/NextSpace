import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

// Configuration for GitHub o auth
export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ]
};

// Instantiate NextAuth with configuration
const handler = NextAuth(authOptions);

// Allow API to accept get and post to NextAuth
export { handler as GET, handler as POST };