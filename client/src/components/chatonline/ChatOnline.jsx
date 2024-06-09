import './chatonline.css'
import { img1 } from '../../constants/images'

const ChatOnline = () => {
  return (
    <div className='chatonline'>
      <div className="chatonlineF">
        <div className="chatonlineImgC">
            <img src={img1} alt="" className="chatonlineImg" />
            <div className="chatonlineB"></div>
        </div>
        <span className="chatonlineN">Udumizi Solomon</span>
      </div>
    </div>
  )
}

export default ChatOnline

