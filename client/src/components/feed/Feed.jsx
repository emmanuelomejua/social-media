import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import { Posts } from '../../data'

const Feed = () => {
  return (
    <section className='feed'>
      <div className='feedWrapper'>
        <Share/>
        {
          Posts.map((p)=> (
            <Post key={p.id} post={p}/>
          ))
        }

      </div>
    </section>
  )
}

export default Feed
