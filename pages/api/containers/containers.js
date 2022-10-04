import { ContainerInstanceManagementClient } from "@azure/arm-containerinstance";
import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";

export default async function handler(req, res) {
  const { action, password } = req.query;
  const azureCredential = new DefaultAzureCredential();

  const keyvault = new SecretClient(process.env.KEYVAULT_URL, azureCredential);
  const containerPassword = await keyvault.getSecret(process.env.KEYVAULT_CONTAINER_STARTUP_SECRET_NAME);

  let response = {};
  if (password === containerPassword.value) {
    const containerManager = new ContainerInstanceManagementClient(azureCredential, process.env.MAIN_CONTAINER_SUBSCRIPTION_ID);
    const resourceGroupName = process.env.MAIN_RESOURCE_GROUP_NAME;
    const contianerGroupName = process.env.MAIN_CONTAINER_GROUP_NAME;

    if (action === 'start') {
      response = await containerManager.containerGroups.beginStart(resourceGroupName, contianerGroupName);
    } else if (action === 'stop') {
      response = await containerManager.containerGroups.stop(resourceGroupName, contianerGroupName);
    }
  } else {
    res.json({ success: false });
    return;
  }
  
  res.json({ success: true });
}