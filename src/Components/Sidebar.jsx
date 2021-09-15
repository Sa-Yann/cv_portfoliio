import React from 'react';
import "./Sidebar.css";
import Background4LinkedInCloneHorizontal from './../assets/Background4LinkedInCloneHorizontal.png'
import {Avatar}  from "@material-ui/core";
import {useSelector} from 'react-redux';
import {selectUser} from './../features/userSlice';

function Sidebar () {

    const user = useSelector(selectUser);
    // recentItem est une function qui prend topic comme variable et render une div
    // const recentItem = (topix) => (div)
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
                <span className="sidebar__hash">#</span>
                <p>{topic}</p>
            </div>
    )      
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src={Background4LinkedInCloneHorizontal} alt="" />
                <Avatar src={user.photoUrl} className="sidebar__avatar"> {user.displayName[0]}</Avatar>
                {/* if no picture the first letter of the email will be shown in the profil picture circle  */}
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            {/* Before using redux dispacth user
            <div className="sidebar__top">
                 <img src={Background4LinkedInCloneHorizontal} alt="" />
                 <Avatar className="sidebar__avatar"/>
                 <h2>SaiYann</h2>
                 <h4>saiyann@gmail.com</h4>
             </div> */}
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed You</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent Skills:</p>
                {recentItem("ReactJs")}
                {recentItem("NodeJs")}
                {recentItem("NextJs")}
                {recentItem("Redux")}
                {recentItem("Web Socket")}
            </div>
        </div>
    );
}
export default Sidebar