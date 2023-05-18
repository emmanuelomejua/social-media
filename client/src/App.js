import './app.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import Messenger from './pages/messenger/Messeger'
import { Routes, Route } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from './context/authContext';


function App() {

  const {user} = useContext(AuthContext)
  return (
    <main className="app">
    <Routes>
     
        <Route exact path='/' element={user ? <Home/> : <Login/>}/>

        <Route exact path='/profile/:username' element={user ? <Profile/> : <Login/>}/>
        <Route exact path='/register' element={user ? <Register/> : <Home/>}/>
        <Route exact path='/login' element={user ? <Login/> : <Home/>}/>
        <Route exact path='/messenger' element={user ?<Messenger/> :  <Login/>}/>
      
    </Routes>
    </main>
  );
}

export default App; 
