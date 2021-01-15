import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
                Authorization: 'Client-ID 3cmy69PDNiirxvK_13L8KyIsr4634lfmNqakLlKRN-o'
            }
})