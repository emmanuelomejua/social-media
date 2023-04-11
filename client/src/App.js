import './app.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import Messenger from './pages/messenger/Messeger'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <main className="app">
    <Routes>
     
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/profile/:username' element={<Profile/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/messenger' element={<Messenger/>}/>
      
    </Routes>
    </main>
  );
}

export default App; 
