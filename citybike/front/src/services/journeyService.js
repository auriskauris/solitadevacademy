import axios from 'axios';

const baseUrl = '/journeys'

//GET all data from database

const getAll = () => {
    const request = axios.get(baseUrl,makeHeader())
    return request.then(response => response.data)
}

export default {
    getAll: getAll,

}