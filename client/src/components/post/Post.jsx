import { MoreVert } from '@mui/icons-material'
import './post.css'
import heart from '../../assets/hearts.png'
import likeIcon from '../../assets/like1.png'
import img from '../../assets/pic1.jpg'
import { Users } from '../../data'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { apiRoute } from '../../utils/API'
import { Link } from 'react-router-dom'

const Post = ({post}) => {
    const [like, setLike] = useState(post.likes)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})

    const handleLike = () => {
        setLike(prev=>isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(apiRoute + `users?userId=${post.userId}`)
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
                    <Link to={`/profile/${user.username}`}>
                    <img src={user.profilePics  || img} alt="" className="PPImg" />
                    </Link>
                    <span className="PUname">{user?.username}</span>
                    <span className="pDate">{post.date}</span>
                </div>
                <div className="topRight">
                    <MoreVert/>
                </div>
            </div>

            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.img} alt="" className="pImg" />
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
