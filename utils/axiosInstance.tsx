import axios from 'axios';

export default axios.create({
  // baseURL: process.env.NEXT_PUBLIC_LOCAL_BACKEND_URL,
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
