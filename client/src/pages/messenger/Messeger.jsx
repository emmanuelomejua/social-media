import './messenger.css'
import {Topbar, Chat, Message, ChatOnline} from '../../components/index'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../services/authContext'
import SERVER from '../../utils/API'

const Messeger = () => {
  const {user} = useContext(AuthContext)
  
  const [chats, setChats] = useState([])

  useEffect(()=> {
      const getChats = async () => {
        try {
          const res = await SERVER.get(`chat/${user?._id}`)
          setChats(res.data)
        } catch (error) {
          console.error(error)
        }
      
      }
      getChats()
  }, [user._id])

  return (
    <>
    <Topbar/>
     <div className='messenger'>
       <section className="chatmenu">
        <div className="menuWrap">
            <input type="text" className="menuInput" placeholder='Search Friends...'/>
            { chats?.map((chat) => (
                  <Chat chat={chat} key={chat._id}/>
            ))}

        </div>
       </section>

       <section className="chatBox">
        <div className="boxWrap">
            <div className="boxTop">
                  <Message/>
                  <Message />
                  <Message />
                  <Message />
                  <Message />
                  <Message />
                  <Message />
                  <Message />
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
