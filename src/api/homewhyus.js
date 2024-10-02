import axios from "axios";

const API_URL = "http://localhost:3000/homewhyuss";

export const getAllHomewhyus = () => {
  return axios.get(API_URL);
};

export const getHomewhyusId = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const createHomewhyus = (homewhyus) => {
  return axios.post(API_URL, homewhyus);
};

export const updateHomewhyus = (id, homewhyus) => {
  return axios.put(`${API_URL}/${id}`, homewhyus);
};

export const deleteHomewhyus = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
