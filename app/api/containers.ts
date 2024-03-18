import { ContainerInstanceManagementClient } from "@azure/arm-containerinstance";
import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";

import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  success: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { action, password } = await req.body;
  const azureCredential = new DefaultAzureCredential();

  const {
    KEYVAULT_URL,
    KEYVAULT_CONTAINER_STARTUP_SECRET_NAME,
    MAIN_CONTAINER_SUBSCRIPTION_ID,
    MAIN_RESOURCE_GROUP_NAME,
    MAIN_CONTAINER_GROUP_NAME
  } = process.env;

  if (
    KEYVAULT_URL &&
    KEYVAULT_CONTAINER_STARTUP_SECRET_NAME &&
    MAIN_CONTAINER_SUBSCRIPTION_ID &&
    MAIN_RESOURCE_GROUP_NAME &&
    MAIN_CONTAINER_GROUP_NAME
    ) {
    const keyvault = new SecretClient(KEYVAULT_URL, azureCredential);
    const containerPassword = await keyvault.getSecret(KEYVAULT_CONTAINER_STARTUP_SECRET_NAME);

    if (password === containerPassword.value) {
      const containerManager = new ContainerInstanceManagementClient(azureCredential, MAIN_CONTAINER_SUBSCRIPTION_ID);
      const resourceGroupName = MAIN_RESOURCE_GROUP_NAME;
      const contianerGroupName = MAIN_CONTAINER_GROUP_NAME;

      if (action === 'start') {
        await containerManager.containerGroups.beginStart(resourceGroupName, contianerGroupName);
      } else if (action === 'stop') {
        await containerManager.containerGroups.stop(resourceGroupName, contianerGroupName);
      }
    } else {
      res.status(200).send({ success: false });
      return;
    }
  } else {
    res.status(200).json({ success: false });
    return;
  }
  
  res.status(200).json({ success: true });
}