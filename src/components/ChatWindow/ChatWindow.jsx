import { useDispatch, useSelector } from "react-redux";
import "./ChatWindow.css";

import { getMessages } from "../../store/slices/messagesSlice";
import MyMesage from "../MyMessage/MyMesage";
import Message from "../Message/Message";
import ChatBottom from "../ChatBottom/ChatBottom";
import { useAuth } from "../../hooks/use-auth";

const ChatWindow = ({
  messagesArray,
  inputValue,
  setInputValue,
  createMessage,
}) => {
  const {email} = useAuth()
  const dispatch = useDispatch();

  const messageArrayFilter = messagesArray && [...messagesArray].sort((a,b) => new Date(a.date) - new Date(b.date))


  return (
    <>
      <div className="chat-window">
        <ul className="chat-window__list">
          {messageArrayFilter.map((el) => {
            if(el.userEmail !== email) {
              return <Message messageText={el.message} email={el.userEmail} key={el.date}/>
            } else {
              return <MyMesage messageText={el.message} key={el.date} />
            }
          }
           
          )}
        </ul>
        <ChatBottom inputValue={inputValue} setInputValue={setInputValue} createMessage={createMessage}/>
      </div>
    </>
  );
};

export default ChatWindow;
