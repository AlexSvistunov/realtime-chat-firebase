import { useNavigate } from 'react-router-dom'
import './Header.css'

import {ROUTES} from '../../routes'

const Header = () => {

  const navigate = useNavigate()

  const openLoginPage = () => {
    navigate(ROUTES.login)
  }

  const openRegisterPage = () => {
    navigate(ROUTES.register)
  }

  return (
    <header className='header'>
      <button onClick={openLoginPage}>Войти</button>
      <button onClick={openRegisterPage}>Зарегаться</button>
    </header>
  )
}

export default Header