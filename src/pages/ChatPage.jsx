import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../hooks/use-auth";
import { useEffect, useState } from "react";

import { removeUser } from "../store/slices/userSlice";

import { doc, setDoc, getDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { onSnapshot } from "firebase/firestore";

import { v4 as uuidv4 } from "uuid";

import { getMessages } from "../store/slices/messagesSlice";
import ChatHeader from "../components/ChatHeader/ChatHeader";
import ChatWindow from "../components/ChatWindow/ChatWindow";

import { query } from "firebase/firestore";
import { refreshMessages } from "../store/slices/messagesSlice";

const ChatPage = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  
  const logOut = () => {
    dispatch(removeUser());
  };

  useEffect(() => {
   dispatch(getMessages())
  }, [])
  

  const q = query(collection(db, "messages"));

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const array = []
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      array.push(doc.data())
   
    });

    dispatch(refreshMessages(array))


  });

  const createMessage = async () => {
    if (inputValue) {
      const id = uuidv4();
      await setDoc(doc(db, "messages", id), {
        userEmail: email,
        message: inputValue,
        date: new Date().toISOString(),
      });

      setInputValue("");
    }
  };


  return (
    <>
      {isAuth ? (
        <>
          <ChatHeader email={email} logOut={logOut} />

          <ChatWindow
            inputValue={inputValue}
            setInputValue={setInputValue}
            createMessage={createMessage}

          />
        </>
      ) : (
        <div>Не Авторизован</div>
      )}
    </>
  );
};

export default ChatPage;
