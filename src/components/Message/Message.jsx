import "./Message.css";

const Message = ({ messageText, email }) => {
  return (
    <li className="message-item message">
      <span className="message-item__name">{email}</span>
      {messageText}
      <span className="message-item__time">11:31 AM</span>
    </li>
  );
};

export default Message;
