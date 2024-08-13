import './chat.css';
import { useQuery } from '@tanstack/react-query';
import SERVER from '../../utils/API';
import avater from '../../assets/avater.jpeg'


const Chat = ({chat, currentUser}) => {

  const { data } = useQuery({
    queryKey: ['chat'], 
    queryFn: async () => {
      const friendId = chat.members.find((m) => m !== currentUser?.otherDetails._id);

      const res = await SERVER.get(`users?userId=${friendId}`);
      return res.data
    }
  })


  return (
    <div className='chat'>
      <img src={data?.data.profilePic || avater} alt="" className="chatImg" />
      <span className="chatName">{data?.data.username}</span>
    </div>
  )
}

export default Chat
