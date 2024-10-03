import axios from 'axios'

const API_URL = 'http://localhost:3000/faqs'

export const getAllFaq = () => {
  return axios.get(API_URL)
}

export const getFaqId = (id) => {
  return axios.get(`${API_URL}/${id}`)
}

export const createFaq = (faq) => {
  return axios.post(API_URL, faq)
}

export const updateFaq = (id, faq) => {
  return axios.put(`${API_URL}/${id}`, faq)
}

export const deleteFaq = (id) => {
  return axios.delete(`${API_URL}/${id}`)
}
