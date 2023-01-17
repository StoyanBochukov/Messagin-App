import React from 'react'
import classes from './Profile.module.css'
import { useSelector } from 'react-redux'

const Profile = () => {

  const { user } = useSelector(state => state.auth)

  return (
    <div className={classes.profileWrapper}>
      <div className={classes.profileTop}>
        <div className={classes.profileImg}>
          <img src='./images/image2.jpeg' alt='' />
        </div>
        <div className={classes.profileName}>
          <h1>
            {user.firstName} {user.lastName} <br />
            <span>Co-Founder, HackSoft</span>
          </h1>
        </div>
      </div>
      <div className={classes.profileBottom}>
        <div className={classes.likes}>
          <h1>
            210 <br />
            <span>Likes</span>
          </h1>
        </div>
        <div className={classes.posts}>
          <h1>
            4 <br />
            <span>Posts</span>
          </h1>
        </div>
      </div>

      <div className={classes.profileEdit}>
        <svg
          width='12'
          height='14'
          viewBox='0 0 12 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M1 9.99992V8.20703C1 8.07442 1.05268 7.94725 1.14645 7.85348L8.14645 0.853478C8.34171 0.658216 8.65829 0.658216 8.85355 0.853478L10.6464 2.64637C10.8417 2.84163 10.8417 3.15822 10.6464 3.35348L3.64645 10.3535C3.55268 10.4472 3.4255 10.4999 3.29289 10.4999H1.5C1.22386 10.4999 1 10.2761 1 9.99992ZM1 12.2499C0.585786 12.2499 0.25 12.5857 0.25 12.9999C0.25 13.4141 0.585786 13.7499 1 13.7499H11C11.4142 13.7499 11.75 13.4141 11.75 12.9999C11.75 12.5857 11.4142 12.2499 11 12.2499H1Z'
            fill='#B8B8B8'
          />
        </svg>
      </div>
    </div>
  )
}

export default Profile
