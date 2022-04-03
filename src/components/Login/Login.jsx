import { Children, createContext, useContext, useEffect, useState } from 'react';

import { app } from './../../firebaseConfig';
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';

import { useNavigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { User } from './../../App' 
import "./Login.css"
function Login() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
   

  const [user, loading, error] = useAuthState(auth);

  let navigate = useNavigate();
 
  const a = useContext(User);

  
 

  const addData = () => {
    signInWithPopup(auth, provider)
    
    //signInWithEmailAndPassword(auth, data.email, data.password)
  }
  const singout =()=>{
    auth.signOut()
    alert("singout")
    navigate("/dd")
    
  }

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user){
        a.Update(user.displayName)
        auth.signOut()
        navigate("/");}
  
  }, [user, loading]);

//   useEffect(() => {
//     onAuthStateChanged(auth, (data) => {
   
     
//     })
//   }, [user])
  return (
    <div className="App-header ">
      <a href="index.html">
        <img className='singinEbay' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2560px-EBay_logo.svg.png" alt="" />
      </a>

      <div className='main1'>
        <div className='box'>
          To buy and sell on <span><a className="underLine" href="">www.ebay.com</a></span> or other eBay sites
          internationally, existing users can login using
          their credentials or new users can register an eBay account on ebay.in. Kindly note you can no
          longer
          buy or sell on eBay.in.
        </div>
        <div>
          <h1 className='text'>Hello</h1>
          <span>Sign in to eBay or create an account</span>
        </div>
        <div className='inputBox'>
          <input className='ip1' type="text" placeholder='Enter your name' />

          <button className='btn btn1'
          
          onClick={addData}
          >Continue</button>

         

          <button
            onClick={addData}
          className='btn btn3'>
            Continue with Google</button>

        </div>
      </div>

    </div>
  );
}

export default Login;

