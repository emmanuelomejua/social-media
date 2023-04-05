import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'

const Feed = () => {
  return (
    <section className='feed'>
      <div className='feedWrapper'>
        <Share/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </section>
  )
}

export default Feed
