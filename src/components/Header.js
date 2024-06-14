import React from 'react'
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {onAuthStateChanged } from "firebase/auth";
import { addUSer, removeUser } from '../utils/userSlice'
import { SUPPORTED_LANGUAGES, logo } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/ConfigSlice';



const Header = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const user =useSelector((store)=> store.user)
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)

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
 const handleGptSearchClick = ()=>{
  dispatch(toggleGptSearchView());
 }
 const handleLanguageChange = (e)=>{
  console.log(e.target.value);
    dispatch(changeLanguage(e.target.value))
 }

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
       {showGptSearch && <select className='w-20  bg-gray-900 text-white ' onChange={handleLanguageChange}>
       {SUPPORTED_LANGUAGES.map((lang) =>(
         <option key={lang.identifier} value={lang.identifier} >{lang.name} </option>
       ))}
          
        </select>}
      <button className=' px-4 mx-4  text-white bg-purple-800 rounded-lg'
      onClick={handleGptSearchClick}>
        GPT Search</button>
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
