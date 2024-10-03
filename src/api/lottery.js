import axios from 'axios'

const API_URL = 'http://localhost:3000/lotteries'

export const getAllLottery = () => {
  return axios.get(API_URL)
}

export const getLotteryId = (id) => {
  return axios.get(`${API_URL}/${id}`)
}

export const createLottery = (lottery) => {
  return axios.post(API_URL, lottery)
}

export const updateLottery = (id, lottery) => {
  return axios.put(`${API_URL}/${id}`, lottery)
}

export const deleteLottery = (id) => {
  return axios.delete(`${API_URL}/${id}`)
}
