import { NextApiRequest, NextApiResponse } from "next"
import NextAuth from "next-auth"
import Auth0Provider from "next-auth/providers/auth0"

export const authOptions = {
  providers: [
    Auth0Provider({
        clientId: process.env.AUTH0_CLIENT_ID || '',
        clientSecret: process.env.AUTH0_CLIENT_SECRET || '',
        issuer: process.env.AUTH0_ISSUER
    })
  ],
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, authOptions)
}