import { getData } from '../../../components/api/helpers/database';

export default async function handler (req, res) {
  const test = await getData();
  res.json(test);
}