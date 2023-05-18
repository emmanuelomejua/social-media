import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import { Posts } from '../../data'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { apiRoute } from '../../utils/API'

const Feed = () => {
  const [posts, setPost] = useState([])

  useEffect(()=> {
    const fetchPost = async () => {
      try {
        const res = await axios.get(apiRoute + 'post/timeline/64012520763b03cb59544f6a')
       setPost(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPost()
  }, [])
  
  return (
    <section className='feed'>
      <div className='feedWrapper'>
        <Share/>
        {
          posts.map((post)=> (
            <Post key={post._id} post={post}/>
          ))
        }
      </div>
    </section>
  )
}

export default Feed
