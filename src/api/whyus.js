import axios from 'axios'

const API_URL = 'https://localhost:3000/whyuss'

export const getAllWhyus = () => {
  return axios.get(API_URL)
}

export const getWhyusId = (id) => {
  return axios.get(`${API_URL}/${id}`)
}

export const createWhyus = (whyus) => {
  return axios.post(API_URL, whyus)
}

export const updateWhyus = (id, whyus) => {
  return axios.put(`${API_URL}/${id}`, whyus)
}

export const deleteWhyus = (id) => {
  return axios.delete(`${API_URL}/${id}`)
}
