import axios from 'axios'

const API_URL = 'https://localhost:3000/sliderimages'

export const getAllSliderImage = () => {
  return axios.get(API_URL)
}

export const getSliderImageId = (id) => {
  return axios.get(`${API_URL}/${id}`)
}

export const createSliderImage = (sliderimage) => {
  return axios.post(API_URL, sliderimage)
}

export const updateSliderImage = (id, sliderimage) => {
  return axios.put(`${API_URL}/${id}`, sliderimage)
}

export const deleteSliderImage = (id) => {
  return axios.delete(`${API_URL}/${id}`)
}
