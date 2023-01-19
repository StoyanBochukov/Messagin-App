import axios from "axios";
const API_URL = '/api/tickets/'

const getTickets = async() => {
    const { data } = await axios.get(API_URL)
    if(data){
        localStorage.setItem('tickets', JSON.stringify(data))
    }
    return data
}

const createTicket = async(ticketData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const { data } = await axios.post(API_URL, ticketData, config)
    return data
}

const likeTicket = async(ticketId) => {   
    const { data } = await axios.post(API_URL + ticketId)
    return {
        numLikes: data.numLikes,
        id: data._id
    }
}





const ticketService = {
    getTickets,
    createTicket,
    likeTicket
}

export default ticketService