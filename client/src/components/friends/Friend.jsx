import './friend.css'

const Friend = ({user}) => {
  return (
    <li className='sideFriend'>
        <img src={user.profilePics} alt='' className='sidebarFImage'/>
        <span className='sideFriendName'>{user.username}</span>
    </li>

  )
}

export default Friend
