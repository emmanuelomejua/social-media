import { MoreVert, ThumbUpAltOutlined } from '@mui/icons-material'
import './post.css'
import img from '../../assets/pic1.jpg'
import pImg from '../../assets/thum1.jpg'
import heart from '../../assets/hearts.png'

const Post = () => {
  return (
    <section className='post'>
        <div className="postWrap">
            <div className="postTop">
                <div className="topLeft">
                    <img src={img} alt="" className="PPImg" />
                    <span className="PUname">Mazi Tompolo</span>
                    <span className="pDate">5 min . ago</span>
                </div>
                <div className="topRight">
                    <MoreVert/>
                </div>
            </div>

            <div className="postCenter">
                <span className="postText">Hey kid! This is my first post here</span>
                <img src={pImg} alt="" className="pImg" />
            </div>
            <div className="postBottom">
                <div className="PBleft">
                    <ThumbUpAltOutlined className="likeIcon"/>
                   <img src={heart} alt="" className="likeIcon" />
                   <span className="likeCounter">12 </span>
                </div>
                <div className="PBright">
                    <span className='pComment'>21 comments</span>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Post
