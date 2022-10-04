import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";

const azureCredential = new DefaultAzureCredential();
const keyvault = new SecretClient(process.env.KEYVAULT_URL, azureCredential);

const googleClientID = keyvault.getSecret('google-sso-client-id');
const googleClientSecret = keyvault.getSecret('google-sso-client-secret');

export const authOptions = {
  providers: [
    Google({
      clientId: googleClientID,
      clientSecret: googleClientSecret
    })
  ],
}

export default NextAuth(authOptions)