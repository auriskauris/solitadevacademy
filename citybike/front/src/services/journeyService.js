import axios from 'axios';

const baseUrl = '/journeys'

//GET all data from database

const getAll = () => {
    console.log("Meni2");
    const request = axios.get(baseUrl)
    console.log("Meni3");
    return request.then(response => response.data)
}

export default {
    getAll: getAll,

}