import './topbar.css'
import { Person, Search, Chat, Notifications } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../services/authContext';
import avater from '../../assets/avater.jpeg'

const Topbar = () => {

    const { user } = useContext(AuthContext);

    // const user = true;
  return (
    <nav className='topbar'>
        <section className='topbarLeft'>
            <span className='logo'>Fecebook</span>
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

                <Link to={`/profile/${user?.otherDetails.username}`} className='link'>
                    <img src={user?.otherDetails.profilePic || avater} alt='' className='topbarImg'/>
                </Link>
           
        </section>
    </nav>
  )
}

export default Topbar
