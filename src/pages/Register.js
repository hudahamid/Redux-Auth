import React , {useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

const Register = () => {
  const {state,setState}=useState({
  displayName:"",
    email:"",
   password:"",
   passwordConfrim:"",
   })
   const {email,password,displayName,passwordConfrim}=useState;
   
  const handleSubmit= ()=>{}
 const handleChange= ()=>{}
   
   return (
    <div>
      <div id='logreg-from'>
        <form className='form-signin' onSubmit={handleSubmit}>
           <h1>Register</h1>
           <div>
           <input 
             type='text'
             placeholder='Full Name'
            name='displayName'
            onChange={handleChange}
            value={displayName}
            required
             />
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
             <input 
             type='password'
            id='inputpassword'
            placeholder=' Confrim Password'
            name='passwordConfrim'
             onChange={handleChange}
            value={passwordConfrim}
            required
             />
             <button type='submit'>sign Up</button>
             
             <Link to='/login'> 
              <button type='submit'>Back</button>
             </Link>
           </div>
        </form>
       </div>
    </div>
  )
}

export default Register;
