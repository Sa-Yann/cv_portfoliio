import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


function Widgets() {

    const newsArticle = (heading, subtitle) => (
<       div className="widgets__article">
            <div className="widgest__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgest__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
        
    
    return (
        <div className="widgets">
            {/* <h4>this is the Widget area</h4> */}
            <div className="widgets__header">
                <h2>LinkeIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle(`✅ Coded the Widget Section : Tracking the coding Progress sent to GitHub`, `Top News - 456 readers`)}
            {newsArticle(`🚧 Need to fininish implementing the proper behavior of the profil picture`, `Top News - 863 readers`)}
            {newsArticle(`🔥✅ Manage to loggin using Redux dispatch payload from the user info`, `Top News - 316 readers`)}
            {newsArticle(`📝💄 Created,  Styled and Set up States usebilty for the Login Page Form `, `Top News - 763 readers`)}
            {newsArticle(`✅ Set Up Firebase/ Firestore and The Feed retriving  Messages from The Db`, `Top News - 286 readers`)}
            {newsArticle(`✅ Built the left SideBar and Write article Form in the  Feed Section  `, `Top News - 507 readers`)}
            {newsArticle(`✅ Header Built `, `Top News - 777 readers`)}
            {newsArticle(`📦️ installed react -redux / localhost:3000 running`, `Top News - 467 readers`)}
            {newsArticle(`🔥🔥🔥 SaiYann is building a LinkedIn Clone`, `Top News - 777 readers`)}
        </div>
    )
}

export default Widgets
