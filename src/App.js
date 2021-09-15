import {useDispatch, useSelector}from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from './Components/Sidebar';
import Feeds from './Components/Feeds';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Components/LogPages/Login';
import { auth } from './firebase';
import Widgets from './Components/Widgets';



function App() {

const user = useSelector(selectUser);
const dispatch = useDispatch();

useEffect(() => {


auth.onAuthStateChanged((userAuth)=> {
  if (userAuth) {
    // if userAuth Exist then user can login
    // if user logge in i can dispath the user into the App
    dispatch(login({
      // I can dispacth the user payload via the login Action from redux
      email: userAuth.email,
      uid: userAuth.uid,
      displayName: userAuth.displayName,
      photoURL: userAuth.photoURL
    }))
  } else {
    // else user is loged out
    dispatch(logout({

    }))
  }

});

},[]);


console.log('user:', user);


  return (
    <div className="app">
      
      
      {!user ? (
        <Login />
      ) : (
        <div>
          <Header />
          <div className="app__body">
              <Sidebar />
              <Feeds />
              <Widgets />
            </div>
        </div>    
      )}
      
        
    </div>
  );
}

export default App;
