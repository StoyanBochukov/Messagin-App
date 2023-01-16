import React from 'react'
import classes from './TicketsContainer.module.css'
import InputBox from '../InputBox/InputBox'
import Ticket from '../Ticket/Ticket'

const TicketsContainer = () => {
  return (
    <div className={classes.container}>
        <InputBox />
        <Ticket />
    </div>
  )
}

export default TicketsContainer