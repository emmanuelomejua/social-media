import './share.css'
import img from '../../assets/pic1.jpg'
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material'

const Share = () => {
  return (
    <div className='share'>
     <div className="shareWrapper">
        <div className="shareTop">
            <img src={img} alt='' className='sProfile'/>
            <input type="text" className="sInput" placeholder="What's on your mind?"/>
        </div>

        <hr className="sHr" />

        <div className="shareBottom">
            <div className="sOptions">
                <div className="sOption">
                    <PermMedia htmlColor='tomato' className='sIcon'/>
                    <span className="sText">Photo/Video</span>
                </div>

                <div className="sOption">
                    <Label htmlColor='blue' className='sIcon'/>
                    <span className="sText">Tag</span>
                </div>

                <div className="sOption">
                    <Room htmlColor='green' className='sIcon'/>
                    <span className="sText">Location</span>
                </div>

                <div className="sOption">
                    <EmojiEmotions htmlColor='gold' className='sIcon'/>
                    <span className="sText">Feelings</span>
                </div>
            </div>
            <button className='sBtn'>Share</button>
        </div>
     </div>
    </div>
  )
}

export default Share
