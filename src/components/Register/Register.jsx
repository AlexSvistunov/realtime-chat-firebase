import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Auth from "../Auth/Auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";


const Register = () => {
  const navigation = useNavigate()
  const dispatch = useDispatch()

  const registerUser = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigation('/chat')
        dispatch(setUser({email}))
  
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
     
      });
  };

  return (
    <Auth
      propWord="Register"
      onClickAuth={registerUser}
    />
  );
};

export default Register;
