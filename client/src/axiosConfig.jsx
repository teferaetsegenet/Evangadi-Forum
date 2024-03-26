import axios from 'axios';

const axiosBase  = axios.create({
    baseURL: 'https://evangadi-forum-3-iov5.onrender.com/api'
})

export default axiosBase