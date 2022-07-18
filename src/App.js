
import './App.css';
import Home from './views/Home';
import { Route} from 'react-router';
import { BrowserRouter as Router,Routes } from 'react-router-dom';
import Registro from './views/Registro';
import Login from './views/Login';
import SoundifyHome from './views/SoundifyHome';
import SoundifyPlaylists from './views/SoundifyPlaylists';
import SoundifySearch from './views/SoundifySearch';


function App() {
  return (
    <>
   
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}>
          </Route>
          <Route path="/registro" element={<Registro/>}>
          </Route>
        
          <Route path="/d" element={<SoundifyHome/>}>
          </Route>
          <Route path="/b" element={<SoundifyPlaylists/>}>
          </Route>
          <Route path="/c" element={<SoundifySearch/>}>
          </Route>
          <Route path="/" element={<Home/>}>
          </Route>
        </Routes>
      </Router>
    </>

  )
}

export default App;
