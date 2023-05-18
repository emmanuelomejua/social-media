import { MoreVert } from '@mui/icons-material'
import './post.css'
import heart from '../../assets/hearts.png'
import likeIcon from '../../assets/like1.png'
import { Users } from '../../data'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { apiRoute } from '../../utils/API'

const Post = ({post}) => {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})

    const handleLike = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(apiRoute + `users/${post.userId}`)
                setUser(res.data)
            } catch (error) {
                console.log(error)
            }
        }
    fetchUser()
    }, [post.userId])


    // const user = Users.filter((u)=> u.id === 1)
    // console.log(user[0].username)

  return (
    <section className='post'>
        <div className="postWrap">
            <div className="postTop">
                <div className="topLeft">
                    <img src={user.profilePics} alt="" className="PPImg" />
                    <span className="PUname">{user?.username}</span>
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
                   <img src={likeIcon} alt="" className="likeIcon" onClick={handleLike}/> 
                   <img src={heart} alt="" className="likeIcon" onClick={handleLike}/>
                   <span className="likeCounter">{like} </span>
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
