import { MoreVert, ThumbUpAltOutlined } from '@mui/icons-material'
import './post.css'
import heart from '../../assets/hearts.png'
import like from '../../assets/like1.png'
import { Users } from '../../data'
import { useState } from 'react'

const Post = ({post}) => {
    const [liked, setLiked] = useState(post.liked)
    const [isLliked, setisLLiked] = useState(false)

    const handleLike = (e) => {
        
    }


    const user = Users.filter((u)=> u.id === 1)
    console.log(user[0].username)
  return (
    <section className='post'>
        <div className="postWrap">
            <div className="postTop">
                <div className="topLeft">
                    <img src={Users.filter((u)=>u.id === post.userId)[0].profilePics} alt="" className="PPImg" />
                    <span className="PUname">{Users.filter((u)=>u.id === post.userId)[0].username}</span>
                    <span className="pDate">{post.date}</span>
                </div>
                <div className="topRight">
                    <MoreVert/>
                </div>
            </div>

            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} alt="" className="pImg" />
            </div>
            <div className="postBottom">
                <div className="PBleft">
                   <img src={like} alt="" className="likeIcon" onClick={handleLike}/> 
                   <img src={heart} alt="" className="likeIcon" onClick={handleLike}/>
                   <span className="likeCounter">{liked} </span>
                </div>
                <div className="PBright">
                    <span className='pComment'>{post.comment} comments</span>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Post
