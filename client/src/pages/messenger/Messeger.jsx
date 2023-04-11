import './messenger.css'
import Topbar from '../../components/topbar/Topbar'
import Chat from '../../components/chat/Chat'

const Messeger = () => {
  return (
    <>
    <Topbar/>
     <div className='messenger'>
       <section className="chatmenu">
        <div className="menuWrap">
            <input type="text" className="menuInput" placeholder='Search Friends...'/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
        </div>
       </section>

       <section className="chatBox">
        <div className="boxWrap">
            <div className="boxTop"></div>
            <div className="boxBottom"></div>
        </div>
       </section>

       <section className="chatOnline">
         <div className="onlineWrap"></div>
        online
       </section>
    </div>
    </>
   
  )
}

export default Messeger
