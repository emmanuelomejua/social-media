import './message.css'
import img from '../../assets/pic3.jpg'

const Message = ({own}) => {
  return (
    <div className={own ? 'message own': 'message'}>
        <div className="msgTop">
            <img src={img} alt="" className="msgImg" />
            <p className='msgText'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste commodi asperiores id amet illo porro velit nostrum provident blanditiis ab. Quibusdam saepe nostrum cumque ipsam porro pariatur, error soluta quam.</p>
        </div>
        <div className="msgBottom">1 hour ago</div>
     
    </div>
  )
}

export default Message
