import './messenger.css'
import Topbar from '../../components/topbar/Topbar'
import Chat from '../../components/chat/Chat'
import Message from '../../components/message/Message'
import ChatOnline from '../../components/chatonline/ChatOnline'

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
            <div className="boxTop">
              <Message/>
              <Message own={true}/>
              <Message/>
              <Message/>
              <Message/>
              <Message/>
              <Message/>
              <Message/>
              <Message/>
            </div>
            <div className="boxBottom">
              <textarea placeholder='Text...' className='chatMsgInput'></textarea>
              <button className="chatBtn">Send</button>
            </div>
        </div>
       </section>

       <section className="chatOnline">
         <div className="onlineWrap">
          <ChatOnline/>
         </div>
       </section>
    </div>
    </>
   
  )
}

export default Messeger
