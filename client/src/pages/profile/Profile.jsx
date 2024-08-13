import {Topbar, Sidebar, Feed, Rightbar} from '../../components/index'
import './profile.css';
import SERVER from '../../utils/API'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import avater from '../../assets/avater.jpeg'

const Profile = () => {

  //coming back to thiseed 
  /****N  to test the endpointds */
  const username = useParams().username

  const { data: user } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await SERVER.get(`users?username=${username}`);
      return res.data;
    }
  })



  return (
    <>
    <Topbar/>
      <main className='profile'>
        <Sidebar/>
        <section className='profileRight'>
            <div className="profileRightTop">
                <div className="profileCover">
                    <img src={user?.data?.coverPic || avater} alt="" className="coverImg" />

                    <img src={user?.data?.profilePic || avater} alt="" className="userImg" />
                </div>
                
                <div className="profileInfo">
                    <h4 className="name">{user?.data?.username}</h4>
                    <span className="desc">{user?.data?.desc}</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed username={username}/>
                <Rightbar user={user}/>
            </div>
        </section>
      </main>
    </>

  )
}

export default Profile
