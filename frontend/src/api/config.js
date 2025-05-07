import { get } from "http";

const GLOBAL_API_URL = "http://localhost:8080";
const LOCAL_API_URL = "https://cloud-zupn.onrender.com";

const BASE_URL = LOCAL_API_URL;

export const API_ENDPOINTS = {
  getAllUsers: `${BASE_URL}/users`,
  getUserById: (id) => `${BASE_URL}/users/${id}`,
  getAllShows: `${BASE_URL}/shows`,
  getShowById: (id) => `${BASE_URL}/shows/${id}`,
  getAllTickets: `${BASE_URL}/tickets`,
  getTicketById: (id) => `${BASE_URL}/tickets/${id}`,
  getAllPlaces: `${BASE_URL}/places`,
  getPlaceById: (id) => `${BASE_URL}/places/${id}`,
};
