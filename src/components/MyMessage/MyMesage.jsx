import './MyMessage.css'

const MyMesage = ({messageText}) => {
  return (
    <li className='my-message message'>{messageText}
      <span>11:31 AM</span>
    </li>
  )
}

export default MyMesage