import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const apiEnd =
  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDyv5g4w6QhxD-TvUuXjesci6Tmv_6Y9II';

const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        console.log('credentials', credentials);
        const response = await fetch(apiEnd, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        console.log(data);
        // Returning token to set in session
        return {
          token: data,
          userData: {
            field1: 'custom user data',
          },
        };
      },
    }),
  ],

  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user; // Setting token in session
      return session;
    },
  },
  pages: {
    signIn: '/Login',
    signOut: '--not-used-yet--',
    error: '--not-used-yet--',
    verifyRequest: '--not-used-yet--',
    newUser: '--not-used-yet--',
  },
};

export default NextAuth(authOptions);
