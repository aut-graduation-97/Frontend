import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwtDecode from "jwt-decode";

const apiEnd =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDyv5g4w6QhxD-TvUuXjesci6Tmv_6Y9II";

const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        console.log("credentials", credentials);
        const response = await fetch(apiEnd, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: {
            "Content-Type": "application/json",
          },
        });
        // FIXME: there is no toast for wrong username or password u fucking idiot
        const data = await response.json();
        console.log("data", data);
        // Returning token to set in session
        return {
          // ONLINE
          // token: data.token,
          token: data,
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
      // session.user = token.user; // Setting token in session

      // -------------------------------m ONLINE: decode the jwt and set:
      // session.user = jwtDecode(--token-from-server--);
      // session.token = "--raw-jwt--;

      // -------------------------- FOR DEV

      // super_user: true,
      session.user = jwtDecode(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50X2lkIjoiOTczMTA1NCIsInN1cGVyX3VzZXIiOnRydWUsIm5hbWUiOiJhcmVmZWgga29tcGFuaSIsInVzZXJfaWQiOiI2MzI5ZWQ1YWZiNjcyODI0ZTYzYWI0YTMiLCJhdmF0YXIiOiJodHRwczovL2kucHJhdmF0YXIuY2MvMzAwIiwiaWF0IjoxNjYzODU2MzA5LCJleHAiOjE2NjQ0NjExMDl9.1piHh6vxoU7HCZ_Is1No7nFK1mQoxZsO5MXlNPgysHg"
      );
      // super_user: false,
      session.user = jwtDecode(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50X2lkIjoiOTczMTA1NCIsInN1cGVyX3VzZXIiOmZhbHNlLCJuYW1lIjoiYXJlZmVoIGtvbXBhbmkiLCJ1c2VyX2lkIjoiNjMyOWVkNWFmYjY3MjgyNGU2M2FiNGEzIiwiYXZhdGFyIjoiaHR0cHM6Ly9pLnByYXZhdGFyLmNjLzMwMCIsImlhdCI6MTY2Mzg1NjMwOSwiZXhwIjoxNjY0NDYxMTA5fQ.774PEtkVLB21Qu3Ye38VLpgH2gEqPA9NdKSCVYTJ-Y4"
      );

      session.token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50X2lkIjoiOTczMTA1NCIsInN1cGVyX3VzZXIiOmZhbHNlLCJuYW1lIjoiYXJlZmVoIGtvbXBhbmkiLCJ1c2VyX2lkIjoiNjMyOWVkNWFmYjY3MjgyNGU2M2FiNGEzIiwiYXZhdGFyIjpudWxsLCJpYXQiOjE2NjM4NTYzMDksImV4cCI6MTY2NDQ2MTEwOX0.A4j7rZY6RkVspt6411aWZAA9IjmSLjD5ZgrxOHd-bVA";

      return session;
    },
  },
  pages: {
    signIn: "/Login",
    // signOut: "--not-used-yet--",
    error: "/Err/",
    // verifyRequest: "--not-used-yet--",
    // newUser: "--not-used-yet--",
  },
  // secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
