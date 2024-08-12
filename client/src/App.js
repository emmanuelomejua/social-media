import './app.css'
import { Home, Login, Profile, Register, Messenger} from './pages/index'
import { Routes, Route} from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from './services/authContext';
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient()

function App() {

  const { user } = useContext(AuthContext);

  // const user = true;

  return ( 
    <QueryClientProvider client={queryClient}>
      <main className="app">
      <Routes>
          <Route exact path='/' element={user ? <Home/> : <Login/>}/>

          <Route exact path='/profile/:username' element={user ? <Profile/> : <Login/>}/>
          <Route exact path='/register' element={!user ? <Register/> : <Home/>}/>
          <Route exact path='/login' element={!user ? <Login/> : <Home/>}/>
          <Route exact path='/messenger' element={user ?<Messenger/> :  <Login/>}/>
        
      </Routes>
      <ToastContainer/>
      </main>
    </QueryClientProvider>
  );
}

export default App; 
