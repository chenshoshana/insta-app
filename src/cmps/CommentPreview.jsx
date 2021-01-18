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


export function CommentPreview({ comment }) {

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
            <div className="comment-preview">
                <img className="user-img" src={comment.byUser.imgUrl}></img>
                <div>
                    <div className="comment-details">
                        <p>{comment.byUser.username}</p>
                        <p>{comment.txt}</p>
                    </div>
                    <div>
                        <p>{comment.createdAt}*weeks ago*</p>
                        <p>likes:{comment.likes.length}</p>

                    </div>

                </div>
            </div>
        </section>
    );
}








