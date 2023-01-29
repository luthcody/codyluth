import { updateListItemCompleted } from '../../../components/api/helpers/database';

export default async function handler (req, res) {
  const { completed, listId, itemId } = req.query;

  const results = await updateListItemCompleted(listId, itemId, completed === '1');
  res.json(results);
}