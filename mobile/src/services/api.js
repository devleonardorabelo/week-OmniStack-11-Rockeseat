import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.25.139:21068'
})

export default api