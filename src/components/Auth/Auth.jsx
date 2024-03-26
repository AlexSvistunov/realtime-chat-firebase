import { useState } from "react"


const Auth = ({propWord, onClickAuth}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <div>
      <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
      <button onClick={() => onClickAuth(email, password)}>{propWord}</button>
    </div>
  )
}

export default Auth