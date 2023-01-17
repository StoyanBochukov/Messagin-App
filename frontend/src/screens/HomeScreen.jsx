import React from 'react'
import Profile from '../components/Profile/Profile'
import TicketsContainer from '../components/TicketsContainer/TicketsContainer'
import { useSelector } from 'react-redux'

const HomeScreen = () => {

  const { user } = useSelector(state => state.auth)

  return (
    <>
      <div className='wrapper'>
        <div className='content'>
          {!user ? (
            <TicketsContainer />
          ) : (
            <>
              <Profile />
            <TicketsContainer />
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default HomeScreen
