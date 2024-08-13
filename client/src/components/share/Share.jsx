import './share.css';
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material'
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../services/authContext';
import avater from '../../assets/avater.jpeg'
import SERVER from '../../utils/API'; 
import { toast } from 'react-toastify';
import { toastOptions } from '../../utils/toastOptions';


const Share = () => {

    const { user } = useContext(AuthContext);

    const descRef = useRef();
    const [file, setFile] = useState(null);

    const handleCreatePost = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user?.otherDetails._id,
            desc: descRef.current.value
        };
        if(file){
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append('file', file);
            data.append('name', fileName);
            newPost.img = fileName;

            try {
                await SERVER.post('upload', data)
            } catch (error) {
                console.error(error)
            }
        }

        try {
            const res = await SERVER.post('post/create', newPost);
            if(res.data) {
                toast.success('Post created successfully!', { toastOptions });
                window.location.reload();
                return res.data;
            }
                
        } catch (error) {
            console.error(error)
        }
 
    }


  return (
    <div className='share'>
     <form className="shareWrapper" onSubmit={handleCreatePost}>
        <div className="shareTop">
            <img src={user?.otherDetails.profilePic || avater} alt='' className='sProfile'/>
            <input type="text" className="sInput" ref={descRef} placeholder={`What's on your mind? ${user?.otherDetails.username}`}/>
        </div>

        <hr className="sHr" />

        <div className="shareBottom">
            <div className="sOptions">
                <label htmlFor='file' className="sOption">
                    <PermMedia htmlColor='tomato' className='sIcon'/>
                    <span className="sText">Photo/Video</span>

                    <input 
                    style={{display: 'none'}}
                    type="file" id='file' 
                    accept='.png,.jepg,.jpg' 
                    onChange={(e)=> setFile(e.target.files[0])}/>
                </label>

                <div className="sOption">
                    <Label htmlColor='blue' className='sIcon'/>
                    <span className="sText">Tag</span>
                </div>

                <div className="sOption">
                    <Room htmlColor='green' className='sIcon'/>
                    <span className="sText">Location</span>
                </div>

                <div className="sOption">
                    <EmojiEmotions htmlColor='gold' className='sIcon'/>
                    <span className="sText">Feelings</span>
                </div>
            </div>
            <button className='sBtn' type='submit'>Share</button>
        </div>
     </form>
    </div>
  )
}

export default Share
