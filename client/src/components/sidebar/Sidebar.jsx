import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from '@mui/icons-material'
import './sidebar.css'
import img from '../../assets/pic3.jpg'
import Friend from '../friends/Friend'
import { Users } from '../../data'

const Sidebar = () => {
  return (
    <section className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarList'>
            <li className='sidebarListItem'>
                <RssFeed className='icon'/>
                <span className='text'>Feed</span>
            </li>

            <li className='sidebarListItem'>
                <Chat className='icon'/>
                <span className='text'>Chat</span>
            </li>

            <li className='sidebarListItem'>
                <PlayCircleFilledOutlined className='icon'/>
                <span className='text'>Videos</span>
            </li>

            <li className='sidebarListItem'>
                <Group className='icon'/>
                <span className='text'>Groups</span>
            </li>

            <li className='sidebarListItem'>
                <Bookmark className='icon'/>
                <span className='text'>Bookmarks</span>
            </li>

            <li className='sidebarListItem'>
                <HelpOutline className='icon'/>
                <span className='text'>Questions</span>
            </li>

            <li className='sidebarListItem'>
                <WorkOutline className='icon'/>
                <span className='text'>Jobs</span>
            </li>

            <li className='sidebarListItem'>
                <Event className='icon'/>
                <span className='text'>Events</span>
            </li>

            <li className='sidebarListItem'>
                <School className='icon'/>
                <span className='text'>Courses</span>
            </li>
        </ul>

        <button className='sidebarBtn'>Show more</button>
        <hr className='sideHr'/>

        <ul className='sideFriendList'>
            {
                Users.map((u)=> (
                    <Friend key={u.id} user={u}/>
                ))
            } 
        </ul>
      </div>
    </section>
  )
}

export default Sidebar
