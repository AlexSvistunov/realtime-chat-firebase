import { useState } from "react";
import './Auth.css'

const Auth = ({ propWord, onClickAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth">
      <div className="auth__inner">
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button onClick={() => onClickAuth(email, password)}>{propWord}</button>
      </div>
    </div>
  );
};

export default Auth;
