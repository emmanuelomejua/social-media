import './chat.css'
import img from '../../assets/pic3.jpg'

const Chat = () => {
  return (
    <div className='chat'>
      <img src={img} alt="" className="chatImg" />
      <span className="chatName">Udumizi Solomon</span>
    </div>
  )
}

export default Chat
