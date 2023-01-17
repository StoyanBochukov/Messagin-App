import React, { useState, useEffect } from 'react'
import classes from '../Login/LoginScreen.module.css'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { FaUser } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { register, reset } from '../../redux/auth/authSlice'
import Spinner from '../../components/Spinner'

const RegisterScreen = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const { firstName, lastName, email, password } = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user, isLoading, isSuccess, isError, message } = useSelector(state => state.auth)

    useEffect(() => {
        if(isError){
            toast.error(message)
        }
        if(isSuccess || user){
            navigate('/')
        }
        dispatch(reset())
    }, [isError, isSuccess, user, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const formSubmit = (e) => {
        e.preventDefault()
        if(firstName === '' || lastName === '' || email === '' || password === ''){
            toast.error('Please fill all fields')
        }else{
            const userData = {
                firstName,
                lastName,
                email,
                password
            }
            dispatch(register(userData))
        }
    }

    if(isLoading){
        return <Spinner />
    }

  return (
    <div>
        <div className={classes.formHeading}>
            <h1>
                <FaUser /> Register
            </h1>
            <p>Please create an accout</p>
        </div>
        <form className={classes.loginForm} onSubmit={formSubmit}>
            <input type="text" id='firstName' name='firstName' value={firstName}
            placeholder='Enter your name' required onChange={onChange} />
            <input type="text" id='lastName' name='lastName' value={lastName}
            placeholder='Enter your surname' onChange={onChange} />
            <input type="email" id='email' name='email' value={email}
            placeholder='Enter your email' onChange={onChange} />
            <input type="password" id='password' name='password' value={password}
            placeholder='Enter your password' onChange={onChange} />
            <button className={classes.loginButton}>Submit</button>
        </form>
    </div>
  )
}

export default RegisterScreen