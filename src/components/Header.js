import React, { useEffect } from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'react-redux';
import {addUser,removeUser} from '../utils/userSlice'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';

const Header = () => {
  const user = useStore(store => store.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        console.log(photoURL)
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    });
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
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAAgVBMVEUQEBD///8AAAANDQ0SEhI1NTUJCQmTk5P8/PzDw8PU1NT5+fkhISHx8fHJycnh4eFTU1Ozs7N3d3ednZ2srKxZWVkwMDDr6+t+fn4rKys4ODgXFxclJSXMzMzc3NyHh4dlZWVDQ0NMTExHR0e7u7scHBxnZ2egoKCtra1vb2+EhITfTcecAAAIsUlEQVR4nO2b6XajIBSAFQghMUuz2uxrk7bv/4DDZROMpjXT0vy435wzpzFq8POCcMEkQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQZC/hBjozRaSsIQy73MIHEBrviOEJ4zWHSmPK47k5QLJ43ixJ+A+cigOLW+LokmJWbRai3mr1XKFJr1lC1guZFGlLbLQn0ssQBaRf8yrvm1RKlW1qo5U56VEfjWfyx3YjayiBHOQxcjaHDlfEbfLejlvwb9Dj7Mkji7Ouqnmg8AdhRs+Mls6qmSUDNIqckoZWVR+Jem/EMbJsPK7bo/LW5S5HW9dte2eYJWRD3vkyEY/4bndtlTBFsUVB1fCK4fvSm2pcyWjn6zVodWuKK1xtX2Trnq1rqjvCqoyJ1ZMPjc7k1f7wwPCI6lKeNIFVUKk/ZMOo2/HlSwk6VWpEkZBXVw5V/JXVQCWC+W5okxGDZnYQ9vm9r3Z2pDNbsPy11xR+6tip3+1HFeeq0CMdCVbjUyLvpF1z1X3flyFrqCtJ8c+/EyqAw0C75IJvWVz+2yI4ArKwe66Cq0MuYyrtVAb3Wb1J/wXuBIi0PlFHbxxpYukziA+iJLXNedNLyTeY9BzlS4JdBFqXYkwsHJw1XNx5elScXX0XZXiakVYA1dQCff22BHEETnZ27Kl8apg4Opq2qf6uPKRrujd56BzVa6iw16juIIN8kxCxVG/Becd2fPuIoZV4Go4V7exxpVIh53OoGAk+xu819moDx3bMuWwS2ewOR/8uOoOvCM312Z1UFU62KLid0ISaL70HcgXEcMqcJWNSXIvrtrlnrnXMZ+afc5et75w9XHTcW8WVwk55EbPMFE/pmN1EjOsAleyr3InrlTJvKKZP6F/Trl3DKeAOrdzNfafVurLhq4oeU8ze65V33zdn8cMq9BVlpD7rmrPUu6/mq22Zo5v+lANXSVkZh/CZ7Kz5R1F7DAkJVeylj3mKjjGafFdlY9o6oqSrb2hR/sXPGtj4rsS6UYOTh9wFdbB4tw1rh6ogwl129JBVgxvfkbCNwniSoj9fVdhS1p8+iKuhOfKNtYN2ytGlt4gQPdLZ4TFGjYrwjqYTmFAXOfq6l1Vydr99sp3xfTVNXTFdJPoRgjQdnVXcaug70oNTeTz/Dt1kCXBDf3ClayD1DwdzSOycR1MGDm4iNJ/jKN2GJJyHYSrKj/TfFd+D8nn67gqH9m4Dso2sRsMAYaRW6ty2y7SDq93NT3OgL1kGV7gV3HVmVpGRk3zuErIZ+rTjh1WYR2Eop9I7dg5c4h2E1fBePD1QVeQrx56iY5hK3JrVbhyreak1pXPpFlc/YQrOSiceue5Rg8rz5W9X8/qClIxRYRmUUfNGuMKMk6mFPtndGXGlxt3T8/xw8prr0am8O/P6Mr8yth22auO+nUKV21TGfP1+5O6SsjYtu358nZG49cpXO1g+A5N/Pj6466yrK8foP1s/Lgr7sbPKiEaXZYXV0uTNu/UudqeR6P36fQ6mUz3pEG/XYj2y8yy0D3Ixn3RROVlXHvVjTk3b/Bc2X5xfxBcd3VeNBwQ/nq/nalJk43XVduT1a9JqcF31TZRYJ+It2McSBtTTmn5ljYYOz+WZ2CwdmJm0+zwf+Q8H+C7Ujltr2tcMXaGDSpT0CjPEOSvHsozqLOd/fnJfPln/XZVw85pwIN50eLcP5kXZWSe2YIJXV5Vuv828H0CV249ytO5oozbRQ1C6On5LawL+QED38d3xUkWDHOfyJXcVuRF9cy2gOn5P8qLtlWWz5f1RK6Yl2+3skZ67WA8fFeU7LPU44lceWuw+kNjq3+IPCYM46q3NbftvivOeZga/R9Xx2Iim5v+ZdX84MXmjTo7+zhUM3S/o6WSIK4YFLKohbdzE+6q3hbLpWflYVcizdof+9ns5XRYznvMrJStmKN/25jal13m9qyxs8i+KyYb0HtxdV2/XMa7yXTU2XS3eZcWJf0PV/Bgk+PEPM+H3c1G9zBLrmBR0Swzy7y2RX5Ntu5/114lYf7/ztg51ev67FPoUVciLS0KFKQyriBzZdR+EPLiCsijZhuC9ioJ8/8366+KBXwCagB1rcXj7ZWwYxbdccqq4go6DMIsiNuuSZFu6Lf+1BWMc+rqYDmuvEHe4217SFYZV7zozEApi8UfcZPuoSumBl11cRXitaze2uWz20rZ9125n6xwRWEaNTd75XNYCq4/6iiL5AkouUpgnPPduOLsfh2krk/0eutqXbRT3nJTcMVCV0zKudodp+q9l2Kx2uvfrIHUU35k5V5I+MoVLdp2TqZZH55l+dTlK+Eap4OO4nYROlnkeqYxPGmmOg16xaONK1aUSXY/1cEH6y7qUpmyK7hnX8SVkE/44XZ79otJWsflfP32JruppsGH7BwvJfg8ZEU6zmb7y8fr5w66IedOd7sd9vtq3FKKq3BxGrwII1t3MyiMmZkpu0q8cY5zJWTMDLuD8/uk/XqZHRaLdW+1osEddT1v79RwVXrBR1VCoLSElCert95Cz/qR/bmz2eZ5phZlkoVbpvZCdDqZvNoF5NOIlVC9jyMKV8ybAFBzcFT2Ay+z02JVujT+g/luKVQPm8ybeep9Od5bzk5Qo8lRBpwqontJApIOQukaqpfR4vgq5p3tWgqyGw7O1/Z4trRvqxk5dsns72WNihMre6bugjm+Pl0+J0WzRybGVfoZL7B4snV10PSRac9VC/1qY/RJAGWNuXx1wm3DR+3KL3KykwLdmK4Gw+75utsf1Co5qlbQme/0E43dzETEQ/uiNuLcW6nyEUvWx3F72tnmp2itO+XL1spEkXs/1n6nSvh3pmwxgvao6KYo1qd1vHtJo74x/NPwivelEQRBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEAR5Uv4BptR/N3Ul5AQAAAAASUVORK5CYII="
          alt="Netflix Logo"
        />
      </div>
      {user && (
        <div className='flex px-4'>
          <img className="w-8 h-8 mx-4" src={user.photoURL} alt='userIcon' />
          <button className='font-bold' onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
