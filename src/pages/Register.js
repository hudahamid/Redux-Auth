import React ,{useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {useNavigate ,Link} from 'react-router-dom'
import { registerInitiate } from '../redux/action';

const Register = () => {
    const [state,setState]=useState({
      displayName:'',
        email:'',
       password:'',
       passwordConfirm:''
      });

      const {currentUser} = useSelector(state => state.user);
      const navigate = useNavigate();
      useEffect(()=>{
        if(currentUser){
          navigate('/');
        }

      },[currentUser,navigate])

      const dispatch =useDispatch();
      const {email,password,displayName,passwordConfirm}=state;
    
    
    const handleSubmit= (e)=>{
      e.preventDefault();
      if(password !== passwordConfirm){
        return;

      }
      dispatch(registerInitiate(email,password,displayName));
      setState({email:"",displayName:"",password:"",passwordConfirm:""})
    };
    const handleChange= (e)=>{
      let {name,value} = e.target
      setState({...state,[name]:value})
    }
    
      
      
      
     
      
    return (
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
            <form className='mt-6' onSubmit={handleSubmit}>
            <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                    Sign Up
                </h1>
               <input 
                 type='text'
                id='displayName'
                placeholder='Full Name'
                name='displayName'
                onChange={handleChange}
                 value={displayName}
                required
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                 />
                
                
                
                
                 <input 
                 type='email'
                id='userEmail'
                placeholder='EmailAddress'
                name='email'
                onChange={handleChange}
                 value={email}
                required
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                 />
                 <input 
                 type='password'
                id='inputpassword'
                placeholder='Password'
                name='password'
                onChange={handleChange}
                value={password}
                required
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                 />
                  <input 
                 type='password'
                id='passwordConfirm'
                placeholder='Repeat Password'
                name='passwordConfirm'
                onChange={handleChange}
                value={passwordConfirm}
                required
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                 />


<div className="mt-6">
                 
                 <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" type='submit'>Sign Up</button>  </div>
                 <div className="mt-6">
                 <Link className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-purple-600" to='/login'>back</Link>
                 </div>
            </form>
           </div>
        </div>
      )
    }
    
    export default Register
    
