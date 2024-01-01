import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '4172659dc59c480ab7c6cf76aba998a9'
    }
})