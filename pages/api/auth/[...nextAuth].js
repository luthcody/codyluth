import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
    }),
  ],
}

export default NextAuth(authOptions)