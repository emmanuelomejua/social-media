import { MoreVert } from '@mui/icons-material'
import './post.css'
import {heart, like1, img} from '../../constants/images'
import { useEffect, useState } from 'react'
import SERVER from '../../utils/API'

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
                const res = await SERVER.get(`users?userId=${post.userId}`)
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
                    <span className="pDate">{(post.createdAt)}</span>
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
                   <img src={like1} alt="" className="likeIcon" onClick={handleLike}/> 
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
