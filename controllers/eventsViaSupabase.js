import { deleteAuthDataFrom, getAuthDataFrom, getDataFrom, getServiceFunction, insertAuthDataTo, updateAuthDataTo } from "../dbHelper.js";

export async function getAllEvents(req, res) {
  getDataFrom(req, res, "events", req.params.id);
}

export async function getChosenEvent(req, res) {
  getDataFrom(req, res, "events", req.params.id);
};
export async function getAllCategories(req, res) {
  getDataFrom(req, res, "event_categories");
}

export async function getAuthAllEvents(req, res) {
  getAuthDataFrom(req, res, "subscribed_events");
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

export async function getParticipants(req, res) {
  getServiceFunction(req, res, "get_participants", "given_id", req.params.id);
}

export async function subscribeToAnEvent(req, res) {
  insertAuthDataTo(req, res, "users_events")
}

export async function attendToAnEvent(req, res) {
  updateAuthDataTo(req, res, "users_events", "event_id", req.params.id)
}