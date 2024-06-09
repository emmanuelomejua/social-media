import './chat.css'
import {img1} from '../../constants/images'

const Chat = ({chat}) => {
  return (
    <div className='chat'>
      <img src={img1} alt="" className="chatImg" />
      <span className="chatName">Udumizi Solomon</span>
    </div>
  )
}

export default Chat
