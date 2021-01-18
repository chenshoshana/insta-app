// import React from 'react';
// import { Link } from 'react-router-dom'
// import Avatar from '@material-ui/core/Avatar';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import Divider from '@material-ui/core/Divider';
// import Typography from '@material-ui/core/Typography';
// import StarIcon from '@material-ui/icons/Star';
// import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import IconButton from '@material-ui/core/IconButton';
// import FavoriteBorderRounded from '@material-ui/icons/FavoriteBorderRounded';
// import Share from '@material-ui/icons/Share';
// import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
// import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
// import Box from '@material-ui/core/Box';


export function PostPreview({ post }) {
    console.log(post);
    // const { title, comments, likes } = post
    // var total = {
    //     likes: [],
    //     comments: []
    // }
    // if (!total.comments || !total.comments.length) {
    //     total.comments = []

    // } else if (!total.likes || !total.likes.length) {
    //     total.likes = []
    // } else {
    //     total.comments = comments
    //     total.likes = likes
    //     const commentsCount = comments.forEach(comment => {
    //         total.comments += comment;
    //         const likeRating = comments.forEach(comment => {
    //             total.comments += comment.rate;
    //         })
    //     }
    return (
        <section>
            <div className={'PostPreview'}>
                <h1>post preview</h1>
                <div className="post-header">
                    <div>
                        <p>{post.user.username}</p>
                        <img className="user-img" src={post.user.imgUrl}></img>
                    </div>
                    <p>...</p>
                </div>
                <div className="post-img">
                    <img src={post.imgUrl}></img>
                </div>
                {/* <CommentsList /> */}
            </div>
        </section>
    );
}








