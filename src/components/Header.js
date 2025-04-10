import React, { useEffect } from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'react-redux';
import {addUser,removeUser} from '../utils/userSlice'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { LOGO, USER_IMAGE,SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import {changeLanguage} from '../utils/configSlice'
import {useSelector} from 'react-redux'

const Header = () => {
  const user = useStore(store => store.user)
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        // console.log(photoURL)
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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView())
  }

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }

  const handleLanguageChange = (e) =>{
    // console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))
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
        <div className='flex px-4 relative z-2'>
          {showGptSearch &&(<select className='p-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((language) => (
              <option key={language.identifier} value={language.identifier}>{language.name}</option>
            ))}
          </select>)}
          <button className='py-2 px-4 bg-purple-800 text-white rounded-lg mx-4 my-2' onClick={handleGptSearchClick}>{showGptSearch ? "HomePage" : "GPT Search"}</button>
          <img className="w-8 h-8 mx-4 my-2" src={USER_IMAGE} alt='userIcon' />
          <button className='font-bold' onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
