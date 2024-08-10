import {Topbar, Sidebar, Feed, Rightbar} from '../../components/index'
import img1 from '../../assets/pic1.jpg'
import img2 from '../../assets/thum4.jpg'
import './profile.css'
// import { useEffect, useState } from 'react'
import SERVER from '../../utils/API'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

const Profile = () => {

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
                    <img src={user?.coverPic || img2} alt="" className="coverImg" />

                    <img src={user?.profilePic || img1} alt="" className="userImg" />
                </div>
                
                <div className="profileInfo">
                    <h4 className="name">{user?.username}</h4>
                    <span className="desc">{user?.desc}</span>
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
