import axios from 'axios'

const API_URL = 'http://localhost:3000/orders'

export const getAllOrder = () => {
  return axios.get(API_URL)
}

export const getOrderId = (id) => {
  return axios.get(`${API_URL}/${id}`)
}

export const deleteOrder = (id) => {
  return axios.delete(`${API_URL}/${id}`)
}
