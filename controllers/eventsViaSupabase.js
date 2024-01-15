import { deleteAuthDataFrom, getAuthDataFrom, insertAuthDataTo, updateAuthDataTo } from "../dbHelper.js";
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


export async function getAuthAllEvents(req, res) {
  getAuthDataFrom(req, res, "events");
}

export async function getAuthChosenEvents(req, res) {
  getAuthDataFrom(req, res, "events", req.params.id);
}

export async function insertAuthEvents(req, res) {
  insertAuthDataTo(req, res, "events");
}

export async function updateAuthEvents(req, res) {
  updateAuthDataTo(req, res, "events", "id", req.params.id);
}

export async function deleteAuthEvents(req, res) {
  deleteAuthDataFrom(req, res, "events", "id", req.params.id);
}