import React, { useEffect, useState } from 'react'
import { createTicket } from '../../redux/tickets/ticketSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Spinner from '../Spinner'
import classes from './ImputBox.module.css'

const InputBox = () => {

  const { tickets, isError, isLoading, message:ticketMessage } = useSelector(state => state.ticket)
  const [formData, setFormData] = useState({
    message: ''
  })
  const { message } = formData
  const dispatch = useDispatch()


  useEffect(() => {
    if(isError){
      toast.error(ticketMessage)
    }
  }, [dispatch, isError, ticketMessage, tickets])


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(message === ''){
      toast.error('Please enter a message')
    }else{
      const ticketData = {
        message
      }
      dispatch(createTicket(ticketData))
      toast.success('Message submitted successfuly')
    }
  }

  if(isLoading){
    return <Spinner />
  }

  return (
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='Share something to the community...' id='message'
      name='message' value={message} onChange={onChange} />
      <div className={classes.submitButton}>
        <button type='submit'>Post</button>
      </div>
    </form>
  )
}

export default InputBox
