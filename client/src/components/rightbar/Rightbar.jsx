import './rightbar.css'
import { birthday, img1, ads} from '../../constants/images'
import {Online} from '../../components/index'
import {Users} from '../../data'

const Rightbar = ({user}) => {

  const HomeRightbar = () => {

    return(
      <>
          <div className="birthdayCont">
            <img src={birthday} alt="" className="birthdayImg" />
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
            <span className="infoValue">{user?.data?.city}</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="infoKey">From:</span>
            <span className="infoValue">{user?.data?.from}</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="infoKey">Relationship:</span>
            <span className="infoValue">{user.data?.relationship === 1 ? 'Single' : user.data?.relationship === 2 ? 'Married' : ''}</span>
          </div>
        </div>

        <h2 className='rbTitle'>Friend's List</h2>

        <div className="rbFollowings">
          <div className="rbFollowing">
            <img src={img1} alt="" className="rbFImg" />
            <span className="rbName">Chisom Oniel</span>
          </div>

          <div className="rbFollowing">
            <img src={img1} alt="" className="rbFImg" />
            <span className="rbName">Chisom Oniel</span>
          </div>

          <div className="rbFollowing">
            <img src={img1} alt="" className="rbFImg" />
            <span className="rbName">Chisom Oniel</span>
          </div>

          <div className="rbFollowing">
            <img src={img1} alt="" className="rbFImg" />
            <span className="rbName">Chisom Oniel</span>
          </div>
          <div className="rbFollowing">
            <img src={img1} alt="" className="rbFImg" />
            <span className="rbName">Chisom Oniel</span>
          </div>

          <div className="rbFollowing">
            <img src={img1} alt="" className="rbFImg" />
            <span className="rbName">Chisom Oniel</span>
          </div>
        </div>
  
      </>
     

    )
  }
  return (
    <div className='rightbar'>
        <div className="rightbarWrap">
          {user?.data ? <ProfileRightbar/> : <HomeRightbar/>}
        </div>
    </div>
  )
}

export default Rightbar
