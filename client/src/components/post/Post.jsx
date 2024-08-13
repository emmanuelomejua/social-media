import { MoreVert } from '@mui/icons-material'
import './post.css'
import { heart, like1 } from '../../constants/images'
import { useContext, useEffect, useState } from 'react'
import SERVER from '../../utils/API'
import moment from 'moment';
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import avater from '../../assets/custom.avif';
import custom from '../../assets/avater.jpeg';
import { AuthContext } from '../../services/authContext'

const PF = process.env.REACT_APP_PUBLIC_FOLDER 


const Post = ({post}) => {

    const [like, setLike] = useState(post?.likes?.length);
    const [isLiked, setIsLiked] = useState(false);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        setIsLiked(post?.likes?.includes(user.otherDetails._id))
    }, [user.otherDetails._id, post.likes])

    const handleLike = async () => {
        try {
            const res = await SERVER.put(`post/${post._id}/like`, {
                userId : user?.otherDetails._id
            });
            if(res.data){
                setLike(isLiked ? like - 1 : like + 1)
                setIsLiked(!isLiked);
                return;
            }
        } catch (error) {
            console.log(error);
        }
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
                        <img src={data?.data?.profilePic  || custom} alt="" className="PPImg" />
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
            <img src={post.img ? `${PF+post.img}`: avater} alt="" className="pImg" />
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
