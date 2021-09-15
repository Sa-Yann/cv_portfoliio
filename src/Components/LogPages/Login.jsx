import React, {useState} from 'react';
import './Login.css';
import {auth} from './../../firebase';
import {useDispatch} from 'react-redux';
import { login } from '../../features/userSlice';

function Login() {
    // I wonanknow if there is a name in the name field or not so I create a state
    const [name, setName] =  useState('');
    // same thing for mail password and picture
    const [email, setEmail] =  useState('');
    const [password, setPassword] =  useState('');
    const [profilePic, setProfilePic] =  useState('');
    const dispatch = useDispatch()



    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profilePic: userAuth.user.photoURL
            }))
        }).catch((error) => alert(error))

    };


    const register = () => {
        
        if(!name) {
            return alert('You Nedd to insert a full name!!!');
        }
        // createUserWithEmailAndPassword = firebase auth method that generate user authentification object
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            })
            // I wonna push the user into teh redux Store
            // For that I need to  dispatch/send/shoot the user object from the login to the redux userStore
            // I want to dispacth teh user in teh Login Action
            .then(()=> {
                // the login below is the action imported from the userSlice
                dispatch(login({
                    // we re pusshing an email , uid displayName and photo Url from Firebase to our dataStore
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic
                }));
            });
        }).catch((error) => alert(error));
    };


    return (
        <div className="login">
            {/* <h4>I'm the LoginPage</h4> */}
            <img 
            src="https://www.treez-data.fr/wp-content/uploads/2019/08/580b57fcd9996e24bc43c528.png" 
            alt="linkedIn_logo" 
            />
            <form>
                <input
                value={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder="FullName required For Registraion"
                type="text" />
                <input 
                value={profilePic}
                onChange={(e) => setProfilePic(e.target.value)}
                placeholder="Profile Pic / Url (optional)"
                type="text" />
                <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@gmail.com"
                type="email" />
                <input 
                onChange={(e) => setPassword(e.target.value)}
                value={password} 
                placeholder="password"
                type="password" />
                <button 
                onClick={loginToApp}
                type="submit"> Sign In</button>   
            </form>
            <p>
                Not a member?:{" "}
                <span 
                    onClick={register} 
                    className="login__register"
                >Register Now
                </span>
            </p>

        </div>
    )
}

export default Login
