import React from 'react'
import classes from './TicketsContainer.module.css'
import InputBox from '../InputBox/InputBox'
import Ticket from '../Ticket/Ticket'
import { useSelector } from 'react-redux'

const TicketsContainer = () => {

  const { user } = useSelector(state => state.auth)

  return (
    <div className={classes.container}>
      {!user ? (
        <Ticket />
      ) : (
        <>
          <InputBox />
          <Ticket />
        </>
      )}
    </div>
  )
}

export default TicketsContainer