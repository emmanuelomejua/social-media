import './message.css'
import img from '../../assets/pic3.jpg'
import { format } from 'timeago.js'

const Message = ({own}) => {
  return (
    <div className={own ? 'message own': 'message'}>
        <div className="msgTop">
            <img src={img} alt="" className="msgImg" />
            <p className='msgText'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae temporibus ipsum voluptatibus maiores vel repudiandae, mollitia culpa corporis iure! Consequuntur, deserunt illum est voluptatum fuga qui provident omnis porro! Nam?.</p>
        </div>
        <div className="msgBottom">{new Date().toDateString()}</div>
     
    </div>
  )
}

export default Message
