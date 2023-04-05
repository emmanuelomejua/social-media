import './online.css'
import img from '../../assets/pic3.jpg'

const Online = ({user}) => {
  return (

        <li className="rbFriend">
        <div className="rbPIcont">
              <img src={user.profilePics} alt="" className='rbpImg' />
              <span className="rbOnline"></span>
        </div>
            <span className="rbUname">{user.username}</span>
        </li>
   
  )
}

export default Online
