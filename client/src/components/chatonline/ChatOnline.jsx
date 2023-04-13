import './chatonline.css'
import img from '../../assets/pic3.jpg'

const ChatOnline = () => {
  return (
    <div className='chatonline'>
      <div className="chatonlineF">
        <div className="chatonlineImgC">
            <img src={img} alt="" className="chatonlineImg" />
            <div className="chatonlineB"></div>
        </div>
        <span className="chatonlineN">Udumizi Solomon</span>
      </div>
    </div>
  )
}

export default ChatOnline
