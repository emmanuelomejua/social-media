import {Topbar, Sidebar, Feed, Rightbar} from '../../components/index'
import './home.css'


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
