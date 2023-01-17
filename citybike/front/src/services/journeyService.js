import axios from 'axios';

const baseUrl = '/users'


const getAll = () => {
    const request = axios.get(baseUrl,makeHeader())
    return request.then(response => response.data)
}

export default {
    getAll: getAll,

}