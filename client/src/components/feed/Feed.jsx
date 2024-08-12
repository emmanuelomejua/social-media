import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css';
import { CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import SERVER from '../../utils/API'
import { useContext } from 'react';
import { AuthContext } from '../../services/authContext';

const Feed = ({username}) => {

  const  {user}  = useContext(AuthContext);

    const { isPending, error, data } = useQuery({
      queryKey: ['feeds'],
      queryFn: async () => {
        const res = username ? `post/profile?username=${username}` : 
        await SERVER.get(`post/timeline/${user?.otherDetails._id}`);
        return res.data.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
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
