import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { auth } from '../utils/firebase'
import {onAuthStateChanged } from "firebase/auth";

import { useDispatch } from 'react-redux'
import { addUSer, removeUser } from '../utils/userSlice'

const Body = () => {
  const dispatch = useDispatch()
  const appRouter = createBrowserRouter([
        {
          path:"/",
          element: <Login />
        },
        {
            path:"/browse",
            element: <Browse />
        }
  ]);
  
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid , email, displayName, photoURL} = user;  
        console.log(uid , email, displayName, photoURL);
        dispatch(addUSer({uid: uid, email: email, displayName: displayName , photoURL : photoURL}));
       
      } else {
       dispatch(removeUser());
      }
    });
  },[])

  return (
    <div>
     <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
