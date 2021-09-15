import React from 'react';
import './HeaderOption.css';
import { Avatar } from '@material-ui/core';
import { useSelector} from 'react-redux';
import {selectUser} from './../features/userSlice';


function HeaderOption ({Icon, title, avatar, onClick}) {

    const user = useSelector(selectUser)
    // const dispacth = useDispatch()

    return (
        <div className='headerOption'>
            {/* if there is an Icon  from maturial UI then render the icon */}
            {Icon && <Icon className="headerOption__icon"/>}
            {avatar && 
                <Avatar className="headerOption__icon" 
                    src={user?.photoUrl}
                    onClick={onClick}
                >
                    {user.displayName[0]}
                </Avatar>}
            {/* !!! !!! src={avatar} entre crochet pcq parametre*/}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}
export default HeaderOption