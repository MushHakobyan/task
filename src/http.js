import axios from 'axios';

export const http = axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`,
  headers: { 'Content-Type': 'application/json' }
})