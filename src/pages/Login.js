import React ,{useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {useNavigate ,Link} from 'react-router-dom'
import { facebookSignInInitiate, googleSignInInitiate, loginInitiate } from '../redux/action';
const Login = () => {
    const [state,setState]=useState({
        email:'',
       password:'',
      })
      const {email,password}=state;
      const {currentUser} = useSelector(state => state.user);
      const navigate = useNavigate();
      useEffect(()=>{
        if(currentUser){
          navigate("/");
        }

      },[currentUser,navigate])

      const dispatch =useDispatch();







    const handleGoogleSignIn= ()=>{
      dispatch(googleSignInInitiate());
    }
    const handleFBSignIn= ()=>{
      dispatch(facebookSignInInitiate());
    }
    
    const handleSubmit= (e)=>{
      e.preventDefault();
      if(!email || !password){
        return;
      }
      dispatch(loginInitiate(email,password))
      setState({email: "",password: ""})
    };

    const handleChange= (e)=>{
      let {name,value} = e.target
      setState({...state,[name]:value})
    }
    
      
      
      
     
      
    return (
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
           <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                    Sign in
                </h1>
            <form className='mt-6' onSubmit={handleSubmit}>
    
            <div className="mb-2">
            <div className="flex mt-4 gap-x-2">
                 <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"type='button' onClick={handleGoogleSignIn}>
                 <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            className="w-5 h-5 fill-current"
                        >
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                 </button>
                 <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600" type='button' onClick={handleFBSignIn}>
                 <svg xmlns="http://www.w3.org/2000/svg" 
                 viewBox="0 0 22 22"
                 className="w-8 h-8 fill-current"> 
                 <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/> </svg>
                 </button>
                 </div>
                 <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                 <div className="absolute px-5 bg-white">Or</div> </div>
                 <input 
                 type='email'
                id='inputEmail'
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
                 <div className="mt-6">
                 <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">Sign In</button></div>
                 <hr/>
                 <p className="mt-8 text-xs font-light text-center text-gray-700">Don't have account</p>
                 <Link to='/register'> 
                  <button  className="font-medium text-purple-600 hover:underline" type='submit'>Sign Up New Account</button>
                 </Link>
               </div>
            </form>
           </div>
        </div>
      )
    }
    
    export default Login
    