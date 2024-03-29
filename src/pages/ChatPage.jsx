import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../hooks/use-auth";
import { useState } from "react";

import { removeUser } from "../store/slices/userSlice";

import { doc, setDoc, getDoc, getDocs, collection } from "firebase/firestore"; 
import { db } from "../firebase/firebase";

import { v4 as uuidv4 } from 'uuid';

import { getMessages } from "../store/slices/messagesSlice";




const ChatPage = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  const logOut = () => {
    dispatch(removeUser());
  };

  const createMessage = async () => {
    if(inputValue) {
      const id = uuidv4()
      await setDoc(doc(db, 'messages', id), {
        userEmail: email,
        message: inputValue,
        date: new Date()
      });

      setInputValue('')
    }
  };

  const messagesArray = useSelector((state) => state.message.messages)
  console.log(messagesArray);

  // const getMessages = async () => {

  //   const querySnapshot = await getDocs(collection(db, 'messages'));

  //   querySnapshot.forEach((doc) => {
  //       console.log(doc.id, " => ", doc.data());
  //   });
  // }
 
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
            style={{
              border: "1px solid black",
              width: "80%",
              height: "80vh",
              margin: "20px auto",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                width: "100%",
                height: "100px",
                borderTop: "1px solid black",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                style={{
                  width: "100%",
                  height: "100%",
                  fontSize: "40px",
                  padding: "0 35px",
                }}
              ></input>
              <button onClick={() => {
                createMessage()
                getMessages()
              }}>Отправить</button>
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
