import './rightbar.css'
import gift from '../../assets/gift.png'
import ads from '../../assets/HP-Spectre-x360-16-9-768x512.jpg'
import img from '../../assets/pic3.jpg'
import Online from '../online/Online'
import {Users} from '../../data'

const Rightbar = () => {
  return (
    <div className='rightbar'>
        <div className="rightbarWrap">
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
        </div>
    </div>
  )
}

export default Rightbar
