import './Auth.css'

import { useState } from 'react'

const Auth = ({propWord, isAuthOpen, setIsAuthOpen, onClickAuth}) => {

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div className={isAuthOpen ? 'auth auth--open' : 'auth'}>
      <div className='auth__wrapper'>
        <input className='auth__input' placeholder='Email' type='text' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <input className='auth__input' placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button className='auth__btn' onClick={() => onClickAuth(password, email)}>{propWord}</button>
      </div>
    </div>
  )
}

export default Auth
