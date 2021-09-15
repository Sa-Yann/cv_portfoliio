import React from 'react';
import './Post.css';
import { Avatar} from "@material-ui/core";
import InputOption from './InputOption';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

// function Post ({name, description , message, photoUrl}) {
function Post (props) {


    return (
        <div className="post">
            <div className="post__header">
                <Avatar src={props.photoUrl}>
                    {props.name[0]}
                </Avatar>
                {/* Emmet formula:   .post__info>h2+p     */}
                <div className="post__info">
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                </div>
            </div>
            <div className="post__body">
                {/* test overflow-wrap: anywhere css rule
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, non consectetur. Impedit consequatur repudiandae ipsum laudantium perspiciatis ad repellat minima, laboriosam ullam porro amet iste quas accusamus praesentium, nihil expedita.</p> */}
                <p>{props.message}</p>
            </div>
            <div className="post__buttons">
                {/* <h4> test post-_buttons</h4> */}
                <InputOption 
                Icon={ThumbUpOutlinedIcon}
                title="Like"
                color="gray"
                />
                <InputOption 
                Icon={CommentOutlinedIcon}
                title="Comment"
                color="gray"
                />
                <InputOption 
                Icon={ShareOutlinedIcon}
                title="Comment"
                color="gray"
                />
                <InputOption 
                Icon={SendOutlinedIcon}
                title="Comment"
                color="gray"
                />
            </div>
        </div>
    )
}
export default Post