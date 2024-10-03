import axios from 'axios'

const API_URL = 'http://localhost:3000/lotteryimages'

export const getAllLotteryImage = () => {
  return axios.get(API_URL)
}

export const getLotteryImageId = (id) => {
  return axios.get(`${API_URL}/${id}`)
}

export const createLotteryImage = (lotteryimage) => {
  return axios.post(API_URL, lotteryimage)
}

export const updateLotteryImage = (id, lotteryimage) => {
  return axios.put(`${API_URL}/${id}`, lotteryimage)
}

export const deleteLotteryImage = (id) => {
  return axios.delete(`${API_URL}/${id}`)
}
