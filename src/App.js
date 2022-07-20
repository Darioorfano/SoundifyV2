
import './App.css';
import Home from './views/Home';
import { Route} from 'react-router';
import { BrowserRouter as Router,Routes } from 'react-router-dom';
import Registro from './views/Registro';
import Login from './views/Login';
import SoundifyHome from './views/SoundifyHome';
import SoundifyPlaylists from './views/SoundifyPlaylists';
import SoundifySearch from './views/SoundifySearch';
import SoundifyPlayer from './views/SoundifyPlayer';
import { useHref } from 'react-router';
function App() {

  return (
    <>
   
      <Router>
      
        <Routes>
          <Route path="/login" element={<Login/>}>
          </Route>
          <Route path="/registro" element={<Registro/>}>
          </Route>
        
          <Route path="/home" element={<SoundifyHome/>}>
          </Route>
          <Route path="/player" element={<SoundifyPlayer/>}>
          </Route>
          <Route path="/playList" element={<SoundifyPlaylists/>}>
          </Route>
          <Route path="/search" element={<SoundifySearch/>}>
          </Route>
          <Route path="/" element={<Home/>}>
          </Route>
        </Routes>
        { /*Se establece el navbarMobile y Player aca 
      para que cuando cambie de vista no se finalice
      la ejecucion*/ 
    
      
    }
    <SoundifyPlayer/>
      
      </Router>
    
    </>
      
  )
}

export default App;
