import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, useNavigate } from 'react-router-dom'
import { FaUser, FaImages } from 'react-icons/fa'
import { userUpdate, reset } from '../../redux/auth/authSlice'
import classes from './ProfileScreen.module.css'
import { toast } from 'react-toastify'
import axios from 'axios'

const ProfileScreen = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [position, setPosition] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [image, setImage] = useState('')
  const [file, setFile] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isSuccess } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    } else {
      if (!user.firstName && !user.lastName) {
        dispatch()
      } else {
        setFirstName(user.firstName)
        setLastName(user.lastName)
      }
    }
  }, [dispatch, navigate, user])

  const formSubmit = async(e) => {
    e.preventDefault()
   
    const userData = {
      id: user._id,
      firstName,
      lastName,
      position,
      email,
      password,
      image,
    }
    dispatch(userUpdate(userData))
    setEmail('')
    setImage('')
    setPosition(user.position)
    if(isSuccess){
      toast.success('Profile Updated')
    }
  }

  const onChange = async(e) => {
    // setFile(e.target.files[0])
    // const formData = new FormData()
    // formData.append('file', file)

    // try {
    //   const res = await axios.post('/uploads', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   })

    //   const { fileName, filePath } = res.data
    //   setUploadedFile({
    //     fileName,
    //     filePath
    //   })
    // } catch (error) {
    //   if(error.response.status === 500){
    //     console.log('There was a problem with the server')
    //   }else{
    //     console.log(error.response.data.msg)
    //   }
    // }
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.profile}>
        <div className={classes.profileDetails}>
          <div className={classes.profileHeading}>
            <h1>
              <span>
                <FaUser />
              </span>{' '}
              User Profile Details
            </h1>
            <p>Update you personal details</p>
          </div>
          <form className={classes.loginForm} onSubmit={formSubmit}>
            <input
              type='text'
              value={firstName}
              placeholder='Enter your name'
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type='text'
              value={lastName}
              placeholder='Enter your surname'
              required
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type='text'
              value={position}
              placeholder='Enter your position in the company'
              onChange={(e) => setPosition(e.target.value)}
            />
            <input
              type='email'
              value={email}
              placeholder='Update Email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              value={password}
              placeholder='Update password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit'>Submit</button>
          </form>
        </div>

        <div className={classes.profileImage}>
          <div className={classes.profileHeading}>
            <h1>
              <span>
                <FaImages />
              </span>{' '}
              Profile Picture
            </h1>
            <p>Upload a photo of yourself</p>
          </div>
          <div className={classes.image}>
            <img src={user.image} alt='' />
          </div>
          <form onSubmit={formSubmit}>
            <div className={classes.imageInput}>
              <input
                type='text'
                placeholder='Enter image url'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <input type='file' onChange={onChange}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
