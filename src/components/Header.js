import React from 'react'
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {onAuthStateChanged } from "firebase/auth";
import { addUSer, removeUser } from '../utils/userSlice'
import { logo } from '../utils/constants';



const Header = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const user =useSelector((store)=> store.user)

  const handleSignOut =()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      }).catch((error) => {
      // An error happened.
      
    });
  }
  useEffect(()=>{
    const unSUbscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid , email, displayName, photoURL} = user;  
      
        dispatch(
          addUSer({
            uid: uid,
             email: email, 
             displayName: displayName ,
              photoURL : photoURL
            })
          );
        navigate("/browse")
      } else {
       dispatch(removeUser());
       navigate("/")
      }
    });

    //unsubscribe when componentn unmount
    return ()=> unSUbscribe();
  },[])
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between'>
    <div>
    <img 
     className='w-40'
     src={logo} 
     alt="logo" />
    </div>
    {
       user && user.uid && (<div className=' h-8 flex pr-4'>
      <img src={user.photoURL} alt="userimage" />
      <button
       className='text-white '
       onClick={handleSignOut}>signout</button>
     </div>)
    }
    </div>
  )
}

export default Header
