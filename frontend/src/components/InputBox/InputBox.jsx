import React from 'react'
import classes from './ImputBox.module.css'

const InputBox = () => {
  return (
    <form>
      <input type='text' placeholder='Share something to the community...'/>
      <div className={classes.submitButton}>
        <button type='submit'>Post</button>
      </div>
    </form>
  )
}

export default InputBox
