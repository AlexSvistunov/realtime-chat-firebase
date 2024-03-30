import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../hooks/use-auth";
import { useEffect, useState } from "react";

import { removeUser } from "../store/slices/userSlice";

import { doc, setDoc, getDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";

import { v4 as uuidv4 } from "uuid";

import { getMessages } from "../store/slices/messagesSlice";
import ChatHeader from "../components/ChatHeader/ChatHeader";
import ChatWindow from "../components/ChatWindow/ChatWindow";

const ChatPage = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  const logOut = () => {
    dispatch(removeUser());
  };

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

  const messagesArray = useSelector((state) => state.message.messages);
  console.log(messagesArray);

  // const getMessages = async () => {

  //   const querySnapshot = await getDocs(collection(db, 'messages'));

  //   querySnapshot.forEach((doc) => {
  //       console.log(doc.id, " => ", doc.data());
  //   });
  // }

  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  return (
    <>
      {isAuth ? (
        <>
          <ChatHeader email={email} logOut={logOut}/>

          <ChatWindow messagesArray={messagesArray} inputValue={inputValue} setInputValue={setInputValue} createMessage={createMessage}/>
        </>
      ) : (
        <div>Не Авторизован</div>
      )}
    </>
  );
};

export default ChatPage;
