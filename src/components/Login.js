import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUSer } from '../utils/userSlice';
import { BG_url, PHOTOURL } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm]= useState(true);
  const [errorMessage, setErrormessage] = useState(null);
  
  const dispatch = useDispatch()
  
  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)


  
  const handleButtonClick = ()=>{
    const msg =  checkValidData(email.current.value, password.current.value)
    setErrormessage(msg);
    if(msg) return;

    if(!isSignInForm){
      //sign up logic
      createUserWithEmailAndPassword(auth,
        email.current.value, 
        password.current.value
      )
        .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, 
          photoURL:  PHOTOURL
        }).then(() => {
              const {uid , email, displayName, photoURL} = auth.currentUser;  
              dispatch(addUSer({
                  uid: uid,
                 email: email, 
                 displayName: displayName ,
                  photoURL : photoURL
                }));
         }).catch((error) => {
          // An error occurred
            setErrormessage(error.Code + "-"+ error.Message)

          // ...
        });
  
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrormessage(errorCode + "-"+ errorMessage)
      // ..
    });
    }else{
      //sign in logic
      signInWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value)
      .then((userCredential) => {

    // Signed in 
       const user = userCredential.user;
     })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormessage(errorCode + "-"+ errorMessage) 
    });
    }

  }

  const toggleSigninForm = ()=>{
        setIsSignInForm(!isSignInForm)
  }
  return (
    <div >
     <Header />
     <div className='absolute top-0 left-0 w-full h-full '>
      <img src={BG_url} alt="bgimg"className='w-full h-full object-cover' />
     </div>
     <form onSubmit={(e)=>e.preventDefault()} className=' w-3/12 p-10 bg-black absolute  my-36 mx-auto right-0 left-0 text-white bg-opacity-75' >
      <h1 className='font-bold text-3xl py-4'>{isSignInForm ?"Sign In":"Sign Up"}</h1>
      
     
       {
        !isSignInForm && <input 
        ref = {name}
         type="text" 
         placeholder='Enter Full Name' 
         className='p-2 my-4 w-full bg-gray-700'
       />
       }

      <input 
        ref={email}
        type="text" 
        placeholder='Email Address' 
        className='p-2 my-4 w-full bg-gray-700'
      />
      
      <input 
        ref={password}
        type="password" 
        placeholder='Password' 
        className='p-2 my-4 w-full bg-gray-700'
      />
      <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
      <button 
        className='p-4 my-6 bg-red-700 w-full rounded-lg
        'onClick={handleButtonClick}>
        {isSignInForm ?"Sign In":"Sign Up"}
        
      </button>
      <p 
        className='p-4 cursor-pointer' 
        onClick={toggleSigninForm}>{isSignInForm ?"New to Netflix sign Up":"Alredy User Sign In"}
      </p>
     </form>
    </div>

  )
}

export default Login
