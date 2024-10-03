import axios from 'axios'

const API_URL = 'https://powerful-plains-07667-03abf6521974.herokuapp.com/api/data'

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
