import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import img1 from '../../assets/pic1.jpg'
import img2 from '../../assets/thum4.jpg'
import './profile.css'

const Profile = () => {
  return (
    <>
    <Topbar/>
      <main className='profile'>
        <Sidebar/>
        <section className='profileRight'>
            <div className="profileRightTop">
                <div className="profileCover">
                    <img src={img2} alt="" className="coverImg" />
                    <img src={img1} alt="" className="userImg" />
                </div>
                
                <div className="profileInfo">
                    <h4 className="name">John Emmanuel</h4>
                    <span className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elita. Dolor.</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed/>
                <Rightbar profile/>
            </div>
        </section>
      </main>
    </>

  )
}

export default Profile
