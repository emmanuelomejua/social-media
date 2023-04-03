import './app.css'
import {Search} from '@mui/icons-material'
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="app">
     <h1>Material UI</h1>
     <span>Search <Search/></span>

     <Button type='primary'>Submit</Button>
    </div>
  );
}

export default App; 
