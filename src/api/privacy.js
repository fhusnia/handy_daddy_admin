import axios from "axios";

const API_URL = "http://localhost:3000/privacies";

export const getAllPrivacy = () => {
  return axios.get(API_URL);
};

export const getPrivacyId = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const createPrivacy = (privacy) => {
  return axios.post(API_URL, privacy);
};

export const updatePrivacy = (id, privacy) => {
  return axios.put(`${API_URL}/${id}`, privacy);
};

export const deletePrivacy = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
