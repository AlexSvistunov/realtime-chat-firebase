import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../hooks/use-auth";

import { removeUser } from "../store/slices/userSlice";

const ChatPage = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  console.log(isAuth);

  const logOut = () => {
    dispatch(removeUser());
  };

  return (
    <>
      {isAuth ? (
        <>
          <div style={{ display: "flex", gap: "10px" }}>
            <div>Авторизован</div>
            <div>{email}</div>
            <button onClick={logOut}>Выйти</button>
          </div>

          <div
            style={{ border: "1px solid black", width: "80%", height: "80vh", margin: '20px auto', position: 'relative'}}>
            
            <div style={{position: 'absolute', bottom: '0', left: '0', width: '100%', height: '100px', borderTop: '1px solid black', display: 'flex', justifyContent: 'flex-end'}}>
              <input style={{width: '100%', height: '100%', fontSize: '40px', padding: '0 35px'}}></input>
              <button>Отправить</button>
            </div>
          </div>
        </>
      ) : (
        <div>Не Авторизован</div>
      )}
  
    </>
  );
};

export default ChatPage;
