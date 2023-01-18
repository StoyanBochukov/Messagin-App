import axios from "axios";
const API_URL = '/api/tickets'

const getTickets = async() => {
    const { data } = await axios.get(API_URL)
    // if(data){
    //     localStorage.setItem('tickets', JSON.stringify(data))
    // }
    return data
}

const createTicket = async(ticketData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const { data } = await axios.post(API_URL, ticketData, config)
    console.log(data)
    return data
}





const ticketService = {
    getTickets,
    createTicket
}

export default ticketService