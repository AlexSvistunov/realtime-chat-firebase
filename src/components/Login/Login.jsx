import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Auth from "../Auth/Auth"
import { useNavigate } from "react-router-dom";

import { setUser } from "../../store/slices/userSlice";
import { useDispatch } from "react-redux";


const Login = () => {
  const navigation = useNavigate()
  const dispatch = useDispatch()


  const loginUser = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      navigation('/chat')
      dispatch(setUser({email}))
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }
  return (
    <Auth propWord='Login' onClickAuth={loginUser}/>
  )
}

export default Login