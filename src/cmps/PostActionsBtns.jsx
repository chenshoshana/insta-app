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
        likes: [
            {
                id: utilService.makeId(),
                byUser: {
                    "_id": "sadad748",
                    "username": "abraham_lincoln",
                    "imgUrl": "https://www.goodesign.co.il/wp-content/uploads/2017/03/HIPSTORY-Shimoni-Lincoln.jpg"
                },
            }
        ],
        likesToDisplay: ''
    }

    isLiked = () => {
        (this.props.clickedLike) ? this.onRemoveLike() : this.onAddLike()
    }

    onAddLike = async ev => {
        const likesAmount = this.state.likes.length + 1;
        console.log('likesAmount', likesAmount);
        // const copy = { ...this.state }
        // console.log('copy', copy);
        this.setState({
            likesToDisplay: likesAmount
        })
        console.log('this.state.likesToDisplay',this.state.likesToDisplay);

        // this.setState(...copy.likesToDisplay: likesNumToDisplay) 

        // const likesNumToDisplay = copy.likes.length + 1;
        // console.log('likesNumToDisplay', likesNumToDisplay);
        // console.log(this.state.likesToDisplay);
        //    var newLikesAmount = copy.displayedLikesAmount + 1;
    }

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

    onRemoveLike = async ev => {
        console.log('enter onRemoveLike');
        // ev.preventDefault()
        console.log('this.state', this.state)
        const savedLike = this.state.likes[0]
        await this.props.addLike(savedLike)
        this.setState({ savedLike })
        this.props.toggleLiked()
    }

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
            <div className="post-actions-btns">
                <CardActions disableSpacing>
                    {/* <IconButton aria-label="add to favorites"> */}
                    <IconButton aria-label="add to favorites" onClick={this.isLiked} className={this.props.clickedLike ? "liked" : ''}>
                        <FavoriteIcon />
                    </IconButton>
                    <i className="fi-rr-bookmark"></i>
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

