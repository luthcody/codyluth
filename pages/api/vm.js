import axios from "axios";

export default async function handler(req, res) {
  const { action, password } = req.query;
  const url = process.env.GAME_VM_URL;
  let response = {};

  if (password === process.env.GAME_VM_PASSWORD) {
    if (action === 'start') {
      response = await axios.post(url, {
        start: true
      });
    } else if (action === 'stop') {
      response = await axios.post(url, {
        action: false
      });
    }
  } else {
    res.json({ success: false });
    return;
  }
  
  res.json({ success: response.data.success });
}