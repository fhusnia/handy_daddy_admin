import axios from 'axios'

const API_URL = 'https://localhost:3000/contactforms'

export const getAllContactform = () => {
  return axios.get(API_URL)
}

export const getContactformID = (id) => {
  return axios.get(`${API_URL}/${id}`)
}

export const deleteContactform = (id) => {
  return axios.delete(`${API_URL}/${id}`)
}
