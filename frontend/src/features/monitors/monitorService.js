import axios from 'axios'

const API_URL = '/api/monitors/'

const createMonitor = async (monitorData, token) => {
    const config= {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, monitorData, config)
    return response.data
}

const getMonitors = async (token) => {
    const config= {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)
    return response.data
}

const monitorService = {
    createMonitor,getMonitors
}
export default monitorService