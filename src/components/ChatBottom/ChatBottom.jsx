import { useDispatch } from 'react-redux';
import './ChatBottom.css'

import { getMessages } from '../../store/slices/messagesSlice';

const ChatBottom = ({inputValue, setInputValue, createMessage}) => {
  const dispatch = useDispatch()

  return (
    <div className="chat-bottom"
    
    >
      <input className='chat-bottom__input'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Start typing...'
       
      ></input>
      <button className='chat-bottom__btn'
        onClick={() => {
          createMessage();
          dispatch(getMessages());
        }}
      >
      </button>
    </div>
  );
};

export default ChatBottom;
