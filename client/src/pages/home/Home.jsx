import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

const Home = () => {
  return (
    <>
    <Topbar/>
      <main className='home'>
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </main>
    </>
  )
}

export default Home
