import { getEventsData, getEventIdData } from "../adapters/supabaseAdapter.js";

export async function getEvents(req, res) {
  try {
    const data = await getEventsData();
    res.status(200).json(data);
  } catch (err) {
    res.send(`error in viaSupabase: ${err}`);
  }
}

export async function getEventId(req, res) {
  try {
    const EventId = parseInt(req.params.number);
    const users = await getEventIdData(EventId);
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
