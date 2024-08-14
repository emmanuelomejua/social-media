import './messenger.css'
import {Topbar, Chat, Message, ChatOnline} from '../../components/index'
import { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../../services/authContext'
import SERVER from '../../utils/API';
import { useQuery } from '@tanstack/react-query';
import { io } from 'socket.io-client';


const Messeger = () => {

  const {user} = useContext(AuthContext);

  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState('');
  const [arrivedMsg, setArrivedMsg] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  
  const scrollRef = useRef();
  const socket = useRef();


  useEffect(() => {
    socket.current = io('ws://localhost:8900');
    socket.current.on('getMessage', data => {
      setArrivedMsg({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now()
      })
    })
  }, [])


  useEffect(() => {
    arrivedMsg && currentChat?.members.includes(arrivedMsg?.sender) &&
    setMessages((prev) => [...prev, arrivedMsg])
  }, [currentChat, arrivedMsg])


  useEffect(() => {
    socket?.current.emit('addUser', user.otherDetails._id);
    socket?.current.on('getUsers', (users) => {
      setOnlineUsers(
        user.otherDetails.followings.filter((f) => users.some((u) => u.userId === f))
      );
    })
  }, [user])



  useEffect(() => {
    scrollRef?.current?.scrollIntoView({behavior: 'smooth'})
  }, [messages])
  
  
  const {data: chats} = useQuery({
    queryKey: ['chats'],
    queryFn: async () => {
      const res = await SERVER.get(`chat/${user?.otherDetails._id}`);
      return res.data;
    }
  })


  useEffect(() => {
    (async () => {
      try {
        const res = await SERVER.get(`msg/${currentChat?._id}`);
        setMessages(res.data)
      } catch (error) {
        console.error(error)
      }
    })();
  }, [currentChat])


  const sendMessage = async () => {
    const message = {
      sender: user?.otherDetails._id,
      text: newMsg,
      chatId: currentChat._id
    };

    const receiverId = currentChat?.members.find((memeber) => memeber !== user.otherDetails._id);

    socket.current.emit('sendMessage', {
      senderId: user?.otherDetails._id,
      receiverId,
      text: newMsg
    })

    try {
      const res = await SERVER.post('msg', message);
      setMessages([...messages, res.data]) ;
      setNewMsg('');
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
              <div onClick={() => setCurrentChat(chat)} key={chat._id}>
                <Chat chat={chat} currentUser={user}/>
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
                  <div ref={scrollRef} key={m._id}>
                    <Message message={m} own={m.sender === user.otherDetails._id}/>
                  </div>
                ))
              }
            </div>
            <div className="boxBottom">
              <textarea placeholder='Text...' 
                className='chatMsgInput' 
                onChange={(e) => setNewMsg(e.target.value)}
                value={newMsg}
              />

              <button className="chatBtn" onClick={sendMessage}>Send</button>
            </div>
        </div>: 
        <span className='nochat'>Open a conversation to start a chat</span>
        }
       </section>

       <section className="chatOnline">
         <div className="onlineWrap">
          <ChatOnline 
            onlineUsers={onlineUsers} 
            currentId={user?.otherDetails._id} 
            setCurrentChat={setCurrentChat}
          />

         </div>
       </section>
    </div>
    </>
   
  )
}

export default Messeger;
