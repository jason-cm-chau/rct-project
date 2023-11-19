import axios from 'axios'

const API_URL = '/api/computers/'

const createComputer = async (computerData, token) => {
    const config= {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, computerData, config)
    return response.data
}

const getComputers = async (token) => {
    const config= {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)
    return response.data
}

const computerService = {
    createComputer,getComputers
}
export default computerService