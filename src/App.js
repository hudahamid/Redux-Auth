import './App.css';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
    <BrowserRouter>
     <div className='app'>
      <Switch>
        <Route path='/' component={Home}/>
        <Route path='/Login' component={Login}/>
        <Route path='/Register' component={Register}/>
      </Switch>
     </div>
    </BrowserRouter>
  );
}

export default App;
