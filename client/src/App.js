import './app.css'
import { Home, Login, Profile, Register, Messenger} from './pages/index'
import { Routes, Route} from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from './services/authContext';


function App() {

  const {user} = useContext(AuthContext)
  return (
    <main className="app">
    <Routes>
     
        <Route exact path='/' element={user ? <Home/> : <Login/>}/>

        <Route exact path='/profile/:username' element={user ? <Profile/> : <Login/>}/>
        <Route exact path='/register' element={!user ? <Register/> : <Home/>}/>
        <Route exact path='/login' element={!user ? <Login/> : <Home/>}/>
        <Route exact path='/messenger' element={user ?<Messenger/> :  <Login/>}/>
      
    </Routes>
    </main>
  );
}

export default App; 
