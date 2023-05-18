import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import img1 from '../../assets/pic1.jpg'
import img2 from '../../assets/thum4.jpg'
import './profile.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { apiRoute } from '../../utils/API'
import { useParams } from 'react-router-dom'

const Profile = () => {

  const [user, setUser] = useState([])
  const username = useParams().username

  useEffect(()=> {
    const getUser = async () => {
      try {
        const res = await axios.get(apiRoute + `users?username=${username}`)
        setUser(res.data)
      } catch (err) {
        
      }
    }
    getUser()
  }, [username])

  return (
    <>
    <Topbar/>
      <main className='profile'>
        <Sidebar/>
        <section className='profileRight'>
            <div className="profileRightTop">
                <div className="profileCover">
                    <img 
                    src={user.coverPic || img2} 
                    alt="" 
                    className="coverImg" 
                    />

                    <img 
                    src={user.profilePic || img1} 
                    alt="" 
                    className="userImg" 
                    />

                </div>
                
                <div className="profileInfo">
                    <h4 className="name">{user.username}</h4>
                    <span className="desc">{user.desc}</span>
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
