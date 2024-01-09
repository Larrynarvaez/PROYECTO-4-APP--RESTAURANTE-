import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Reservations from './components/Reservations';


import { Routes,Route } from 'react-router-dom';

function App() {
  
  

  return (
    <div>

      <Header/>
      <Routes>
        
        <Route path = '/' element={<Home/>}/>
        <Route path = '/menu' element={<Menu/>}/>
        <Route path = '/reservaciones' element={<Reservations/>}/>

      </Routes>
      

    </div>
  )
}

export default App
