import axios from 'axios'

const API_URL = 'http://localhost:3000/contacts'

export const getAllContact = () => {
  return axios.get(API_URL)
}

export const getContactId = (id) => {
  return axios.get(`${API_URL}/${id}`)
}

export const createContact = (contact) => {
  return axios.post(API_URL, contact)
}

export const updateContact = (id, contact) => {
  return axios.put(`${API_URL}/${id}`, contact)
}

export const deleteContact = (id) => {
  return axios.delete(`${API_URL}/${id}`)
}
