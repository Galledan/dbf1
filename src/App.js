import {Route, Routes} from 'react-router-dom';
import Main from './pages/Main';
import Pilots from './pages/Pilots';
import Rules from './pages/Rules';
import Admin from './pages/Admin';
import "./App.css"

function App() {
  return (
    <div className="App">
       <Routes>
      <Route path="/" element={<Main />}/> 
      <Route path="/pilotlar" element={<Pilots />}/> 
      <Route path="/kurallar" element={<Rules />}/>
      <Route path="/admin" element={<Admin />}/>  
   </Routes>
    </div>
  );
}

export default App;
