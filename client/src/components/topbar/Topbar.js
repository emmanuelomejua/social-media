import './topbar.css'
import { Person, Search, Chat, Notifications } from '@mui/icons-material'
import img from '../../assets/pic1.jpg'

const Topbar = () => {
  return (
    <nav className='topbar'>
        <section className='topbarLeft'>
            <span className='logo'>Tompolo Social</span>
        </section>

        <section className='topbarCenter'>
            <div className='searchbar'>
                <Search className='searchIcon'/>
                <input type='text' placeholder='Search post' className='searchInput'/>
            </div>
        </section>

        <section className='topbarRight'>
            <div className='topbarLinks'>
                <span className='topbarLink'>Home</span>
                <span className='topbarLink'>Timeline</span>
            </div>
            <div className='topbarIcons'>
                 <div className='topbarIconItem'>
                <Person/>
                <span className='topbarIconBadge'>2</span>
                </div>

                <div className='topbarIconItem'>
                <Chat/>
                <span className='topbarIconBadge'>2</span>
                </div>

                <div className='topbarIconItem'>
                <Notifications/>
                <span className='topbarIconBadge'>3</span>
                </div>
            </div>

            <img src={img} alt='' className='topbarImg'/>
        </section>
    </nav>
  )
}

export default Topbar
