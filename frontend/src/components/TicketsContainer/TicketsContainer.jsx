import React, { useEffect } from 'react'
import classes from './TicketsContainer.module.css'
import InputBox from '../InputBox/InputBox'
import Ticket from '../Ticket/Ticket'
import { useSelector, useDispatch } from 'react-redux'
import { getTickets, reset } from '../../redux/tickets/ticketSlice'
import { toast } from 'react-toastify'
import Spinner from '../Spinner'

const TicketsContainer = () => {

  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const { tickets, isError, isLoading, isSuccess, message } = useSelector(state => state.ticket)
  

  useEffect(() => {
    return () => {
      if(isSuccess){
        dispatch(reset())
      }
      if(isError){
        toast.error(message)
      }
    }
  }, [dispatch, isSuccess, isError, message])

  useEffect(() => {
    dispatch(getTickets())
  }, [dispatch])

  if(isLoading){
    return <Spinner />
  }

  return (
    <>

    {!user ? (
      <div className={classes.container}>
     {tickets.map((ticket) => (
      <Ticket key={ticket._id} ticket={ticket}/>
     ))}
    </div>
    ) : (
      <div className={classes.container}>
        <InputBox />
      {tickets.map((ticket) => (
       <Ticket key={ticket._id} ticket={ticket}/>
      ))}
     </div>
    )}
    
    </>
  )
}

export default TicketsContainer