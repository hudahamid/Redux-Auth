import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
    <BrowserRouter>
     <div className='app'>
      <Routes>
        <Route exact path='/' element={<Home/>}  />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Register' element={<Register/>}  />
      </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;
