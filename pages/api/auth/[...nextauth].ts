import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { getSecretValue } from '../../../components/api/helpers/keyvault';

async function getAuthOptions(req, res) {
  const googleClientID = await getSecretValue('google-sso-client-id');
  const googleClientSecret =  await getSecretValue('google-sso-client-secret');
  
  const authOptions = {
    providers: [
      Google({
        clientId: googleClientID,
        clientSecret: googleClientSecret
      })
    ],
  }

  return NextAuth(req, res, authOptions)
}

export default getAuthOptions;