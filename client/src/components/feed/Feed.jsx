import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css';
import { CircularProgress } from '@mui/material';
// import { Posts } from '../../data';
import { useQuery } from '@tanstack/react-query';
import SERVER from '../../utils/API'

const Feed = ({username}) => {

    const { isPending, error, data } = useQuery({
      queryKey: ['feeds'],
      queryFn: async () => {
        const res = username ? `post/profile?username=${username}` : 
        await SERVER.get('post/timeline/66b732a709813d60373b76ce');
        return res.data;
      }
    })


  return (
    <section className='feed'>
      <div className='feedWrapper'>
        <Share/>
        { isPending ? <CircularProgress sx={{display: 'flex', margin: 'auto'}}/>: 

        error ? <div className='err'>An error occurred!</div> : 

          data?.map((post)=> (
              <Post key={post._id} post={post}/>
            ))
        }
      </div>
    </section>
  )
}

export default Feed;
