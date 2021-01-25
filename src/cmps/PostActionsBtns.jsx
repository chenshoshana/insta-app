import { React, Component } from 'react'
import { addLike } from '../store/action/likeActions.js'
import { connect } from 'react-redux'
import { postService } from '../service/postService.js'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { utilService } from '../service/utilService.js';
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CommentList } from './CommentList.jsx'
import { removePost } from '../store/action/postActions.js'
import { RemovePostConfirm } from './RemovePostConfirm.jsx';

export class _PostActionsBtns extends Component {

    state = {
        // likes: [
        //     {
        //         id: utilService.makeId(),
        //         byUser: {
        //             "_id": "sadad748",
        //             "username": "abraham_lincoln",
        //             "imgUrl": "https://www.goodesign.co.il/wp-content/uploads/2017/03/HIPSTORY-Shimoni-Lincoln.jpg"
        //         },
        //     }
        // ],
        // likesToDisplay: ''
    }
    componentDidMount() {
        // check the post likes array, search for the current user _id
        // if user _id exists mark heart as red, if _id === -1 mark as black

    }

    // isLiked = () => {
    //     (this.props.clickedLike) ? this.onRemoveLike() : this.onAddLike()
    // }

    // onAddLike = async ev => {
    //     const likesAmount = this.state.likes.length + 1;
    //     console.log('likesAmount', likesAmount);
    //     // const copy = { ...this.state }
    //     // console.log('copy', copy);
    //     this.setState({
    //         likesToDisplay: likesAmount
    //     })
    //     console.log('this.state.likesToDisplay', this.state.likesToDisplay);

        // this.setState(...copy.likesToDisplay: likesNumToDisplay) 

        // const likesNumToDisplay = copy.likes.length + 1;
        // console.log('likesNumToDisplay', likesNumToDisplay);
        // console.log(this.state.likesToDisplay);
        //    var newLikesAmount = copy.displayedLikesAmount + 1;
    // }

    // onSaveLike = async ev => {
    //     console.log('this.state.likes[0]', this.state.likes[0]);
    //     console.log('enter onSaveLike');
    //     // ev.preventDefault()
    //     console.log('this.state', this.state)
    //     const savedLike = this.state.likes[0]
    //     await this.props.addLike(savedLike)
    //     this.setState({ savedLike })
    //     this.props.toggleLiked()
    // }

    // onRemoveLike = async ev => {
    //     console.log('enter onRemoveLike');
    //     // ev.preventDefault()
    //     console.log('this.state', this.state)
    //     const savedLike = this.state.likes[0]
    //     await this.props.addLike(savedLike)
    //     this.setState({ savedLike })
    //     this.props.toggleLiked()
    // }

    // onInputChange = (ev) => {//on input change
    //     console.log('ev.target.value:', ev.target.value)
    //     const post = { ...this.state.post }
    //     post[ev.target.name] = ev.target.value
    //     console.log(post[ev.target.name])
    //     this.setState({
    //         post
    //     })
    // }

    // onAddPostToView = () => {
    //     postService.add(this.state.post)
    //         .then(savedPost => {
    //             this.props.addPost()
    //         })
    // }

    render() {
        const { post } = this.props
        return (
            <div className="act-btn-container">
                <CardActions disableSpacing>
                    {/* <IconButton aria-label="add to favorites"> */}
                    {/* <IconButton aria-label="add to favorites" onClick={this.props.toggleLiked} className={this.props.clickedLike ? "liked" : ''}>
                        <FavoriteIcon />
                    </IconButton> */}
                    <div className="post-actions-btns flex space-between ">
                        <div className="left-act-btns-container flex space-between">
                            <svg aria-label="Unlike" display="none" className="_8-yf5 " fill="#ED4956" height="24"
                                viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                            <svg aria-label="Like" onClick={this.props.toggleLiked} className={this.props.clickedLike ? "liked" : ''}
                                viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                            <svg aria-label="Comment" className="_8-yf5 " viewBox="0 0 48 48"
                                width="24"><path d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" ></path></svg>
                            <svg aria-label="Share Post" className="_8-yf5 "
                                viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                        </div>
                        <div className="right-act-btn">
                            <svg aria-label="Save" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
                        </div>
                    </div>
                    {/* <i className="fi-rr-bookmark"></i> */}
                    {/* <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton> */}
                </CardActions>
                <p>{post.likes.length} likes</p>
            </div>
        );

    }


}

const mapStateToProps = state => {
    return {
        posts: state.postModule.posts,
    }
}

const mapDispatchToProps = {
    // addLike,
    // removeLike
}

export const PostActionsBtns = connect(mapStateToProps, mapDispatchToProps)(_PostActionsBtns)

