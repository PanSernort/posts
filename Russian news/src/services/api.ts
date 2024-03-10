import axios from "axios";


const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async () => {
  const response = await axios.get(`${API_BASE_URL}/posts`)
  return response.data
}

export const fetchPost = async (id: number) => {
  const response = await axios.get(`${API_BASE_URL}/posts/${id}`)
  return response.data;
}