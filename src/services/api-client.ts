import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '88946a69f0634933802c8f938775f102'
    }
})