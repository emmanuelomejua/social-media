import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import { Posts } from '../../data'
import { useEffect, useState } from 'react';
import SERVER from '../../utils/API'

const Feed = ({username}) => {
  const [posts, setPost] = useState([])

  // useEffect(()=> {
  //   const fetchPost = async () => {
  //     try {
  //       const res = username ? 
  //       await SERVER.get('post/profile/' + username) : 
  //       await SERVER.get('post/timeline/64012520763b03cb59544f6a')

  //      setPost(res.data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchPost()
  // }, [username])

  return (
    <section className='feed'>
      <div className='feedWrapper'>
        <Share/>
        {
        Posts?.map((post)=> (
            <Post key={post._id} post={post}/>
          ))
        }
      </div>
    </section>
  )
}

export default Feed
