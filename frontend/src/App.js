import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Background from './components/Background'
import Navbar from './components/Navbar'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/Login/LoginScreen'
import RegisterScreen from './screens/Register/RegisterScreen'

function App() {
  return (
    <div className='main'>
      <Router>
        <Background />
        <div className='nav-wrapper'>
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={ <HomeScreen />} />
          <Route path='/login' element={ <LoginScreen /> } />
          <Route path='/register' element={ <RegisterScreen /> } />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  )
}

export default App
