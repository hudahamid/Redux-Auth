import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { logoutInitiate } from '../redux/action'
const Home = () => {
  const {currentUser} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleAuth= ()=>{
    if(currentUser){
      dispatch(logoutInitiate());
    }
  }
  return (
    <div>
      <h2>Welcome to redux </h2>
      <button  onClick={handleAuth} >log out</button>
    </div>
  )
}

export default Home
