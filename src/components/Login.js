import React from 'react';
import Header from './Header';

const Login = () => {
    const [signInForm, setSignInForm] = React.useState(true);
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
            <form className='absolute w-3/12 p-12 bg-black/60 my-64 mx-auto right-0 left-0 text-white'>
                <h1 className='font-bold mb-2 text-3xl'>{signInForm ? 'Sign In' : 'Sign Up'}</h1>
                {signInForm ? '' : <input type='text' placeholder='Full Name' className='p-2 my-2 w-full' />}
                <input type='text' placeholder='Email Address' className='p-2 my-2 w-full' />
                <input type='password' placeholder='Password' className='p-2 my-2 w-full' />
                <button className='p-4 my-4 bg-red-600 w-full rounded-lg'>Sign In</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignForm}>{signInForm ? 'New to Netflix? Sign up now.' : 'Already registered? Sign in now.'}</p>
            </form>
        </div>
    );
};

export default Login;
