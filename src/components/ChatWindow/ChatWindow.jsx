import { useDispatch } from "react-redux";
import "./ChatWindow.css";

import { getMessages } from "../../store/slices/messagesSlice";
import MyMesage from "../MyMessage/MyMesage";
import Message from "../Message/Message";
import ChatBottom from "../ChatBottom/ChatBottom";

const ChatWindow = ({
  messagesArray,
  inputValue,
  setInputValue,
  createMessage,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="chat-window">
        <ul className="chat-window__list">
          {messagesArray.map((el) => (
            <>
              <Message messageText={el.message} email={el.userEmail}/>
            </>
          ))}
        </ul>
        <ChatBottom inputValue={inputValue} setInputValue={setInputValue} createMessage={createMessage}/>
      </div>
    </>
  );
};

export default ChatWindow;
