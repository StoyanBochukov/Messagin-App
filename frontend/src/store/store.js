import { configureStore} from '@reduxjs/toolkit'
import { authReducer } from '../redux/auth/authSlice'
import { ticketReducer } from '../redux/tickets/ticketSlice'


const store = configureStore({
    reducer:{
        auth: authReducer,
        ticket: ticketReducer
    }
})

export default store