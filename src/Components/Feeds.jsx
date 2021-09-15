import React, {useState, useEffect} from 'react';
import './Feeds.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './../firebase';
import firebase from 'firebase'; // to be bale to use the timestamp
import {useSelector} from 'react-redux';
import {selectUser} from './../features/userSlice';

function Feeds () {
    const user = useSelector(selectUser)
// I wonna be able tu use the content written in the input placed in the form
    const [inputMsg, setInputMsg] = useState('');

    const [posts, setPosts] = useState([]);

useEffect(() => {
    // 2.21.00
    // Give me a snapshot(real time connection) of the posts Collection anytime there are changes in the list
    // everytime a post get added, deleted , changed ..ect give me a new snapshot of teh collection 
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot( snapshot => (
        // then everytime the post change I wonna update my post state in the db collection
        
        setPosts(
            snapshot.docs.map((doc) => (
                
                // for every doc mapped in the collection return an object.
                {
                // Getting the post id
                id: doc.id,
                // Getting all data storeD in the doc.data()
                data: doc.data(),
            }
            ))
        )
        
    ));
}, []);

// if using [] as second argument  ,
// the code inside the useEffect will be fire of when the component is loading ( page refesh) but never after that 
// whne the feed Component loads or/and in our hour case when it re-render , 
// that s why we re passing the second argument []

const sendPost = (e) => {
    // e.preventDefault(); : so the page doesn't refresh on each event (e)
    e.preventDefault();
    db.collection('posts').add({
        name: user.displayName,
        description: user.email,
        message: inputMsg,
        photoUrl: user.photoUrl || user.displayName[0],
        // using the serverTimestamp to be sure all user are reference from teh same clock no matter their geoLoc
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
    });
    // Seting up the input field empty after submitting
    setInputMsg('');
};

return (
    <div className="feed">
        {/* <h1>feeds field</h1> */}
        <div className="feed_inputContainer">
            <div className="feed__input">
                <CreateIcon /> 
                <form >
                    <input 
                    value={inputMsg} 
                    //{/* the valuie of my inputMsg in my input  stated in my usetate declaration above*/}
                    onChange={ e => setInputMsg(e.target.value)}
                    // on change to avoid the mapping to refesh to fast and blockus to writte in the input field
                    // onChange methode linked to an event e allows us to force the update of input state at every key uses on teh keyboard while typing
                    type="text" placeholder="Write a message" />
                    <button type="submit" onClick={sendPost}>Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon}  title="Photo" color="#70B5F9"/>
                <InputOption Icon={SubscriptionsIcon}  title="Video" color="#E7A33E"/>
                <InputOption Icon={EventNoteIcon}  title="Event" color="#C0CBCD"/>
                <InputOption Icon={CalendarViewDayIcon}  title="Write Article" color="#7FC15E"/>
            </div>
        </div>
        {/* Everytime i have a psot I want to have a new rendering so I use posts.map which go through the posts table  and render each table line*/}
        {/* {posts.map((post)=>{
            <Post />
        })} */}
        {/* destructuring the post getting: */}
        {posts.map(({id, data: {
            name,
            description,
            message,
            photoUrl
        }}) => (
            <Post 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
            />
        ))}
        {/* Post hardCoded before seting up all the useState and useEffect Sttategy 
        <Post 
            name="SaiYann" 
            description="this is a test" 
            message="this is workiiiing!!!!!" 
        />*/}
    </div>
);
}
export default Feeds