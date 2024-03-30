import "./ChatHeader.css";

const ChatHeader = ({ email, logOut }) => {
  return (
    <header className="chat-header">
      <div className="container">
        <div className="chat-header__inner">
          <span>Авторизован</span>
          <span>{email}</span>
          <button onClick={logOut}>Выйти</button>
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;
