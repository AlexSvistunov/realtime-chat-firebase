import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../hooks/use-auth";

import { removeUser } from "../store/slices/userSlice";

const ChatPage = () => {
  const dispatch = useDispatch()
  const { isAuth, email } = useAuth();
  console.log(isAuth);

  const logOut = () => {
    dispatch(removeUser())
  }

  return (
    <>
      {isAuth ? (
        <div>
          <div>Авторизован</div>
          <div>{email}</div>
          <button onClick={logOut}>Выйти</button>
        </div>
      ) : (
        <div>Не Авторизован</div>
      )}
    </>
  );
};

export default ChatPage;
