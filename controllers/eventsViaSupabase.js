import { getEventsData } from "../adapters/supabaseAdapter.js";

export async function getEvents(req, res) {
  try {
    const data = await getEventsData();
    res.status(200).json(data);
  } catch (err) {
    res.send(`error in viaSupabase: ${err}`);
  }
}
