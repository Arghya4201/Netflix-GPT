import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [signInForm, setSignInForm] = React.useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const handleButtonCLick = () => {
        //validate the form data
        console.log(email.current.value)
        console.log(password.current.value)
        const message = checkValidData(email.current.value, password.current.value, name.current?.value)
        // console.log(message)
        setErrorMessage(message)

        if (message) return
        if (!signInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/98112011?v=4"
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        console.log(photoURL)
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                        // navigate("/browse")
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message)
                    });

                    console.log(user)
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage)
                    // ..
                });

        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    // navigate("/browse")
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage)
                });

        }

    }
    const toggleSignForm = () => {
        //If signed in that is true the form should not be the signin form and vice versa  
        setSignInForm(!signInForm);
    };
    return (
        <div className='h-screen w-full relative'>
            <Header />
            <div className=''>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSMt0SE2xJ_LZucgbJUgXwrB7rYtTwHDpdfA&s"
                    alt="Netflix Background"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
            </div>
            {/* Explain1: */}
            <form onSubmit={(e) => e.preventDefault()} className='absolute w-3/12 p-12 bg-black/60 my-64 mx-auto right-0 left-0 text-white'>
                <h1 className='font-bold mb-2 text-3xl'>{signInForm ? 'Sign In' : 'Sign Up'}</h1>
                {signInForm ? '' : <input ref={name} type='text' placeholder='FUll Name' className='p-2 my-2 w-full' />}
                <input ref={email} type='text' placeholder='Email Address' className='p-2 my-2 w-full' />
                <input ref={password} type='password' placeholder='Password' className='p-2 my-2 w-full' />
                <p className='text-red-600 font-bold text-sm py-2'>{errorMessage}</p>
                <button className='p-4 my-4 bg-red-600 w-full rounded-lg' onClick={handleButtonCLick}>{signInForm ? 'Sign In' : 'Sign Up'}</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignForm}>{signInForm ? 'New to Netflix? Sign up now.' : 'Already registered? Sign in now.'}</p>
            </form>
        </div>
    );
};

export default Login;
