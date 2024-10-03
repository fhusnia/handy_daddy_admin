import axios from 'axios'

const API_URL = 'https://localhost:3000/reviews'

export const getAllReview = () => {
  return axios.get(API_URL)
}

export const getReviewId = (id) => {
  return axios.get(`${API_URL}/${id}`)
}

export const createReview = (review) => {
  return axios.post(API_URL, review)
}

export const updateReview = (id, review) => {
  return axios.put(`${API_URL}/${id}`, review)
}

export const deleteReview = (id) => {
  return axios.delete(`${API_URL}/${id}`)
}
