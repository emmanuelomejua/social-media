import { MoreVert } from '@mui/icons-material'
import './post.css'
import { heart, like1 } from '../../constants/images'
import { useEffect, useState } from 'react'
import SERVER from '../../utils/API'
import moment from 'moment';
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import avater from '../../assets/custom.avif';
import custom from '../../assets/avater.jpeg';

const Post = ({post}) => {

    const [like, setLike] = useState(post?.likes?.length);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

    const { data } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
          const res = await SERVER.get(`users?userId=${post?.userId}`);
          return res.data;
        }
    })


  return (
    <section className='post'>
        <div className="postWrap">
            <div className="postTop">
                <div className="topLeft">
                    <Link to={`/profile/${data?.data?.username}`}>
                        <img src={data?.data?.profilePics  || custom} alt="" className="PPImg" />
                    </Link>
                    <span className="PUname">{data?.data?.username}</span>
                    <span className="pDate">
                        {moment(post.createdAt).fromNow()}
                    </span>
                </div>
                <div className="topRight">
                    <MoreVert/>
                </div>
            </div>

            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.img ? post.img : avater} alt="" className="pImg" />
            </div>
            <div className="postBottom">
                <div className="PBleft">
                   <img src={like1} alt="" className="likeIcon" onClick={handleLike}/> 
                   <img src={heart} alt="" className="likeIcon" onClick={handleLike}/>
                   <span className="likeCounter">{like} </span>
                </div>
                <div className="PBright">
                    <span className='pComment'>{post?.comment} comments</span>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Post;
