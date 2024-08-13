import './messenger.css'
import {Topbar, Chat, Message, ChatOnline} from '../../components/index'
import { useContext } from 'react'
import { AuthContext } from '../../services/authContext'
import SERVER from '../../utils/API';
import { useQuery } from '@tanstack/react-query';

const Messeger = () => {

  const {user} = useContext(AuthContext)
  
  const {data: chats} = useQuery({
    queryKey: ['chats'],
    queryFn: async () => {
      const res = await SERVER.get(`chat/${user?.otherDetails._id}`);
      return res.data;
    }
  })


  return (
    <>
    <Topbar/>
     <div className='messenger'>
       <section className="chatmenu">
        <div className="menuWrap">
            <input type="text" className="menuInput" placeholder='Search Friends...'/>
            { chats?.map((chat) => (
                  <Chat chat={chat} currentUser={user} key={chat._id}/>
            ))}

        </div>
       </section>

       <section className="chatBox">
        <div className="boxWrap">
            <div className="boxTop">
                  <Message/>
                  <Message own={true}/>
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
