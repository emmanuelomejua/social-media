import './topbar.css'
import { Person, Search, Chat, Notifications } from '@mui/icons-material'
import img from '../../assets/pic1.jpg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../services/authContext'

const Topbar = () => {

    const { user } = useContext(AuthContext)
  return (
    <nav className='topbar'>
        <section className='topbarLeft'>
            <span className='logo'>E-Social</span>
        </section>

        <section className='topbarCenter'>
            <div className='searchbar'>
                <Search className='searchIcon'/>
                <input type='text' placeholder='Search post' className='searchInput'/>
            </div>
        </section>

        <section className='topbarRight'>
            <div className='topbarLinks'>
                <Link to='/' className='link'>
                  <span className='topbarLink'>Home</span>
                </Link>
                <span className='topbarLink'>Timeline</span>
            </div>

            <div className='topbarIcons'>
                 <div className='topbarIconItem'>
                <Person/>
                <span className='topbarIconBadge'>2</span>
                </div>

                <div className='topbarIconItem'>
                    <Link to='/messenger' className='link'>
                        <Chat/>
                        <span className='topbarIconBadge'>2</span>
                    </Link>
                </div>

                <div className='topbarIconItem'>
                <Notifications/>
                <span className='topbarIconBadge'>3</span>
                </div>
            </div>

                <Link to={`/profile/:${user.username}`} className='link'>
                <img src={user.profilePic || img} alt='' className='topbarImg'/>
                </Link>
           
        </section>
    </nav>
  )
}

export default Topbar
