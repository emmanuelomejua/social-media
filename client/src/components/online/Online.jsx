import './online.css'


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
