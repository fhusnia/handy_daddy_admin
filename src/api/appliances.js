import axios from 'axios'

const API_URL = 'https://localhost:3000/appliances'

export const getAllAppliances = () => {
  return axios.get(API_URL)
}

export const getApplianceById = (id) => {
  return axios.get(`${API_URL}/${id}`)
}

export const createAppliance = (appliance) => {
  return axios.post(API_URL, appliance)
}

export const updateAppliance = (id, appliance) => {
  return axios.put(`${API_URL}/${id}`, appliance)
}

export const deleteAppliance = (id) => {
  return axios.delete(`${API_URL}/${id}`)
}
