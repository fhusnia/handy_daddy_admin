import axios from 'axios'

const API_URL = 'http://localhost:3000/contacts'

export const getAllBlog = () => {
  return axios.get(API_URL)
}

export const getBlogId = (id) => {
  return axios.get(`${API_URL}/${id}`)
}

export const createBlog = (blog) => {
  return axios.post(API_URL, blog)
}

export const updateBlog = (id, blog) => {
  return axios.put(`${API_URL}/${id}`, blog)
}

export const deleteBlog = (id) => {
  return axios.delete(`${API_URL}/${id}`)
}
