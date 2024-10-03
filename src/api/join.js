import axios from 'axios'

const API_URL = 'https://localhost:3000/joins'

export const getAllJoin = () => {
  return axios.get(API_URL)
}

export const getJoinId = (id) => {
  return axios.get(`${API_URL}/${id}`)
}

export const deleteJoin = (id) => {
  return axios.delete(`${API_URL}/${id}`)
}
