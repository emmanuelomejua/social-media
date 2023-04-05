import './rightbar.css'
import gift from '../../assets/gift.png'
import ads from '../../assets/HP-Spectre-x360-16-9-768x512.jpg'
import img from '../../assets/pic3.jpg'
import Online from '../online/Online'
import {Users} from '../../data'

const Rightbar = ({profile}) => {
  const HomeRightbar = () => {
    return(
      <>
          <div className="birthdayCont">
            <img src={gift} alt="" className="birthdayImg" />
            <span className="birthdayText"><b>Goodness Jane</b> and 3 <b>others</b> have birthday today</span>
            </div>
          <img src={ads} alt="" className="rightAd" />
          <h4 className='fTitle'>Online Friends</h4>
          <ul className="friendList">

            {
              Users.map((u)=> (
                <Online key={u.id} user={u}/>
              ))
            }
          </ul>
      </>
    )
  }
  const ProfileRightbar = () => {
    return(
      <>
         <h2 className='rbTitle'>User Infomation</h2>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="infoKey">City:</span>
            <span className="infoValue">Port Harcourt</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="infoKey">From:</span>
            <span className="infoValue">Abia</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="infoKey">Relationship:</span>
            <span className="infoValue">Single</span>
          </div>
        </div>

        <h2 className='rbTitle'>Friend's List</h2>

        <div className="rbFollowings">
          <div className="rbFollowing">
            <img src={img} alt="" className="rbFImg" />
            <span className="rbName">Chisom Oniel</span>
          </div>

          <div className="rbFollowing">
            <img src={img} alt="" className="rbFImg" />
            <span className="rbName">Chisom Oniel</span>
          </div>

          <div className="rbFollowing">
            <img src={img} alt="" className="rbFImg" />
            <span className="rbName">Chisom Oniel</span>
          </div>

          <div className="rbFollowing">
            <img src={img} alt="" className="rbFImg" />
            <span className="rbName">Chisom Oniel</span>
          </div>
          <div className="rbFollowing">
            <img src={img} alt="" className="rbFImg" />
            <span className="rbName">Chisom Oniel</span>
          </div>

          <div className="rbFollowing">
            <img src={img} alt="" className="rbFImg" />
            <span className="rbName">Chisom Oniel</span>
          </div>
        </div>
  
      </>
     

    )
  }
  return (
    <div className='rightbar'>
        <div className="rightbarWrap">
          {profile ? <ProfileRightbar/> : <HomeRightbar/>}
        </div>
    </div>
  )
}

export default Rightbar
