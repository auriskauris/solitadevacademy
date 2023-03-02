import axios from 'axios';

const baseUrl = '/stations'

//GET all data from database

const getAll = () => {
    console.log("MeniS1");
    const request = axios.get(baseUrl)
    console.log("MeniS2");
    return request.then(response => response.data)
}

export default {
    getAll: getAll,

}