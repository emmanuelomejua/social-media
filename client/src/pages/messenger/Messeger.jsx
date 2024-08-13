import './messenger.css'
import {Topbar, Chat, Message, ChatOnline} from '../../components/index'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../services/authContext'
import SERVER from '../../utils/API';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const Messeger = () => {

  const {user} = useContext(AuthContext);

  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);

  const [newMsg, setNewMsg] = useState('');
  
  const {data: chats} = useQuery({
    queryKey: ['chats'],
    queryFn: async () => {
      const res = await SERVER.get(`chat/${user?.otherDetails._id}`);
      return res.data;
    }
  })


  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await SERVER.get(`msg/${currentChat?._id}`);
        setMessages(res.data)
      } catch (error) {
        console.error(error)
      }
    }
    getMessages();
  }, [currentChat?._id])


  const sendMessage = async () => {
    const message = {
      sender: user?.otherDetails._id,
      text: newMsg,
      chatId: currentChat._id
    }

    try {
      const res = await SERVER.post('msg', message);
      setNewMsg('');
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <>
    <Topbar/>
     <div className='messenger'>
       <section className="chatmenu">
        <div className="menuWrap">
            <input type="text" className="menuInput" placeholder='Search Friends...'/>
            { chats?.map((chat) => (
              <div onClick={() => setCurrentChat(chat)}>
                <Chat chat={chat} currentUser={user} key={chat._id}/>
              </div>
            ))}

        </div>
       </section>

       <section className="chatBox">
       { currentChat ? 
        <div className="boxWrap">
            <div className="boxTop">
              { 
                messages.map((m) => (
                  <Message key={m._id} message={m} own={m.sender === user.otherDetails._id}/>
                ))
              }
            </div>
            <div className="boxBottom">
              <textarea placeholder='Text...' 
              className='chatMsgInput' 
              onChange={(e) => setNewMsg(e.target.value)}
              value={newMsg}
              >
              </textarea>
              <button className="chatBtn" onClick={sendMessage}>Send</button>
            </div>
        </div>: 
        <span className='nochat'>Open a conversation to start a chat</span>
        }
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
