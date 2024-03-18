import './Auth.css'
import { useState } from 'react'

const Auth = ({isAuthOpen, setIsAuthOpen}) => {


  return (
    <div className='auth'>
      <div className='auth__wrapper'>
        <input className='auth__input' placeholder='Email' type='text'></input>
        <input className='auth__input' placeholder='Password' type='password'></input>
        <button className='auth__btn'>Зарегаться</button>
      </div>
    </div>
  )
}

export default Auth
