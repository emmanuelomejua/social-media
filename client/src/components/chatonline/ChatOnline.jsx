import './chatonline.css'
import { img1 } from '../../constants/images'
import { useEffect, useState } from 'react';
import SERVER from '../../utils/API';



const ChatOnline = ({onlineUsers, currentId, setCurrentChat}) => {

  const [friends, setFreiends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);


  useEffect(() => {
    (async () => {
          try {
            const res = await SERVER.get(`users/friends/${currentId}`);
            setFreiends(res.data);
          } catch (error) {
            console.error(error);
          }
        })();
  }, [currentId]);


  useEffect(() => {
    setOnlineFriends(friends?.filter((f) => onlineUsers?.includes(f?._id)))
  },[friends, onlineUsers])


  const handleClick = async (user) => {
    try {
      const res = await SERVER.get(`chat/find/${currentId}/${user?.otherDetails._id}`);
      setCurrentChat(res.data);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className='chatonline'>
      { 
        onlineFriends?.map((online) => (
          <div key={online?._id} className="chatonlineF" onClick={() => handleClick(online)}>
            <div className="chatonlineImgC">
                <img src={img1} alt="" className="chatonlineImg" />
                <div className="chatonlineB"></div>
            </div>
            <span className="chatonlineN">{online?.username}</span>
          </div>
        ))
      }
    </div>
  )
}

export default ChatOnline

