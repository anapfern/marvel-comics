import axios from 'axios'
import md5 from 'md5'

const baseURL = import.meta.env.VITE_API_MARVEL
const publicKey = import.meta.env.VITE_API_KEY
const privateKey = import.meta.env.VITE_API_SECRET
const timestamp = Number(new Date())
const hash = md5(timestamp + privateKey + publicKey)

export const api = axios.create({
  baseURL,
  params: {
    apikey: publicKey,
    ts: timestamp,
    hash,
  },
})
