
import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";

async function getSecretValue(secretName: string) {
  const azureCredential = new DefaultAzureCredential();
  const keyvaultURL = process.env.KEYVAULT_URL;

  if (keyvaultURL) {
    const keyvault = new SecretClient(keyvaultURL, azureCredential);

    const secret = await keyvault.getSecret(secretName);
    return secret.value;
  }
  return null;
}

export {
  getSecretValue,
}
