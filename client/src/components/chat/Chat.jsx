import './chat.css';
import SERVER from '../../utils/API';
import avater from '../../assets/avater.jpeg'
import { useEffect, useState } from 'react';


const Chat = ({chat, currentUser}) => {

  const friendId = chat.members.find((m) => m !== currentUser?.otherDetails._id);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await SERVER.get(`users?userId=${friendId}`);
        setData(res.data);
      } catch (error) {
        console.error(error)
      }
    }
    getUser();
  }, [friendId])


  return (
    <div className='chat'>
      <img src={data?.data.profilePic || avater} alt="" className="chatImg" />
      <span className="chatName">{data?.data.username}</span>
    </div>
  )
}

export default Chat
