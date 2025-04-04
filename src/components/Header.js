import React, { useEffect } from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'react-redux';
import {addUser,removeUser} from '../utils/userSlice'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { LOGO, USER_IMAGE } from '../utils/constants';

const Header = () => {
  const user = useStore(store => store.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        console.log(photoURL)
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: USER_IMAGE }))
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    });

    // unsubscribing the onAuthStateChanged api when the header component unmounts
    return () => unsubscribe();
  }, [])

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className="flex  justify-between items-center absolute w-screen top-0 left-0 px-8 py-2 bg-gradient-to-b from-black z-10">
      <div>
        <img className="w-80 h-32"
          src={LOGO}
          alt="Netflix Logo"
        />
      </div>
      {user && (
        <div className='flex px-4'>
          <img className="w-8 h-8 mx-4" src={USER_IMAGE} alt='userIcon' />
          <button className='font-bold' onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
