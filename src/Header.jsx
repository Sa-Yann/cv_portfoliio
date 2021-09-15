import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import HeaderOption from './Components/HeaderOption';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {useDispatch} from 'react-redux';
import { auth } from './firebase';
import {logout} from './features/userSlice';


function Header () {
    const dispatch = useDispatch();
    

    const logOutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    };

    return (
        <div className="header">
                {/* <h1 className="title">this is the Header</h1> */}
                <div className="header__left">
                    <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="logo-LinkedIn" />
                    <div className="header__search">
                        <SearchIcon />
                        <input 
                        placeholder="Search"
                        type="text" />
                    </div>

                </div>

                <div className="header__right">
                    {/* Parameter Name always with a Uppercase to start ex:Icon */}
                    <HeaderOption Icon={HomeIcon} title="Home"/>
                    <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                    <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                    <HeaderOption Icon={ChatIcon} title="Messaging" />
                    <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                    <HeaderOption 
                        avatar={true}
                        // avatar={"https://avatars.githubusercontent.com/u/49900328?v=4"} 
                        title="Me"
                        onClick={logOutOfApp}/>
                </div>
        </div>
    )
}
export default Header