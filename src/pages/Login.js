import React , {useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
  const [state,setState]=useState({
    email:"",
    password:"",
  })
  const {email,password}=state;
  const handleSubmit= ()=>{}
 const handleChange= ()=>{}
   const handleGoogleSignIn= ()=>{}
   const handleFBSignIn= ()=>{}
   return (
    <div>
      <div id='logreg-from'>
        <form className='form-signin' onSubmit={handleSubmit}>
           <h1>signin</h1>
           <div>
             <button type='button' onClick={handleGoogleSignIn}>
              <span>
                <i className='fab fa-google-plus-g '>sign in with google</i>
              </span>
             </button>
             <button type='button' onClick={handleFBSignIn}>
              <span>
                <i className='fab fa-google-plus-g '>sign in with Facebook</i>
              </span>
             </button>
             <p>or</p>
             <input 
             type='email'
            id='inputEmail'
            placeholder='EmailAddress'
            name='email'
            onChange={handleChange}
            value={email}
            required
             />
             <input 
             type='password'
            id='inputpassword'
            placeholder='Password'
            name='password'
             onChange={handleChange}
            value={password}
            required
             />
             <button type='submit'>sign In</button>
             <hr/>
             <p>Don't have account</p>
             <Link to='/register'> 
              <button type='submit'>sign Up new account</button>
             </Link>
           </div>
        </form>
       </div>
    </div>
  )
}

export default Login
