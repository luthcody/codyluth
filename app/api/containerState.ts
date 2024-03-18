import { ContainerGroup, ContainerInstanceManagementClient } from "@azure/arm-containerinstance";
import { DefaultAzureCredential } from "@azure/identity";
import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  success: boolean,
  serverStatus: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const azureCredential = new DefaultAzureCredential();

  let response = {} as ContainerGroup;

  const containerManager = new ContainerInstanceManagementClient(azureCredential, process.env.MAIN_CONTAINER_SUBSCRIPTION_ID || '');
  const resourceGroupName = process.env.MAIN_RESOURCE_GROUP_NAME || '';
  const contianerGroupName = process.env.MAIN_CONTAINER_GROUP_NAME || '';

  response = await containerManager.containerGroups.get(resourceGroupName, contianerGroupName);

  res.json({ success: true, serverStatus: response.instanceView ? response.instanceView.state || '' : '' });
}