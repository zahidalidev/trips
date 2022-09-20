import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://lo-interview.s3.us-west-2.amazonaws.com/',
  timeout: 1000000,
})

export default instance
