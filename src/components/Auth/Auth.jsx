import { useState } from "react"


const Auth = ({propWord}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
      <button>{propWord}</button>
    </div>
  )
}

export default Auth