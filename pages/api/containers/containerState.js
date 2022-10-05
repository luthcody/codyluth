import { ContainerInstanceManagementClient } from "@azure/arm-containerinstance";
import { DefaultAzureCredential } from "@azure/identity";

export default async function handler(req, res) {
  const azureCredential = new DefaultAzureCredential();

  let response = {};
  const containerManager = new ContainerInstanceManagementClient(azureCredential, process.env.MAIN_CONTAINER_SUBSCRIPTION_ID);
  const resourceGroupName = process.env.MAIN_RESOURCE_GROUP_NAME;
  const contianerGroupName = process.env.MAIN_CONTAINER_GROUP_NAME;

  response = await containerManager.containerGroups.get(resourceGroupName, contianerGroupName);

  res.json({ success: true, serverStatus: response.instanceView.state });
}