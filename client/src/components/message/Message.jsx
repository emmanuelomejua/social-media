import './message.css';
import moment from 'moment';
import img from '../../assets/pic3.jpg'

const Message = ({message, own}) => {
  return (
    <div className={own ? 'message own': 'message'}>
        <div className="msgTop">
            <img src={img} alt="" className="msgImg" />
            <p className='msgText'>{message?.text}</p>
        </div>
        <div className="msgBottom">{moment(message?.createdAt).fromNow()}</div>
     
    </div>
  )
}

export default Message
