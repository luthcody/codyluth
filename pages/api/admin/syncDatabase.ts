import { syncDatabase } from "../../../components/api/helpers/database";

export default async function handler(req, res) {
    try {
        await syncDatabase();
        res.json({ success: true, msg: 'Synced database' });
    } catch (e) {
        console.log(e);
        res.json({ success: false, msg: `Error syncing: ${e.message}` });
    }
}