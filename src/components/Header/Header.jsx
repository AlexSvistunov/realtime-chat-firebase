
const Header = ({isAuthOpen, setIsAuthOpen}) => {
  return (
    <header style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '20px'}}>
      <button onClick={() => setIsAuthOpen(true)}>Войти</button>
      <button onClick={() => setIsAuthOpen(true)}>Зарегаться</button>
    </header>
  )
}

export default Header
