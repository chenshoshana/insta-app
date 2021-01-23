import { React, Component } from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
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
import { UtilService } from '../service/utilService.js'
import { removePost } from '../store/action/postActions.js'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { RemovePostConfirm } from './RemovePostConfirm.jsx';


class _PostPreview extends Component {

  

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

    render() {
        const { post } = this.props
        return (
            <section>
                <Card className={"root"}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={"avatar"}>
                                <img src={post.user.imgUrl} />
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings" onClick={this.props.toggleRemovePost}>
                                <MoreVertIcon />
                            </IconButton>
                            // <IconButton aria-label="settings" onClick={() => this.props.removePost(post._id)}>
                            // <MoreVertIcon />
                            // </IconButton>
                        }
                        title={post.user.username}
                        subheader={post.title}
                    />
                    <Button color="primary">follow</Button>
                    <div>
                        <img className="user-img" src={post.imgUrl} />
                    </div>
                    <CardMedia
                        className={"media"}
                        image={post.title}
                        title="Paella dish"
                    />

                    <CardActions disableSpacing>
                        {/* <IconButton aria-label="add to favorites"> */}
                        <IconButton  aria-label="add to favorites" className="liked"> {/*className={isLiked ? 'liked' : ''}*/}
                            {post.likes.length}<FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        {/* <IconButton
                        className={clsx(expand, {
                            [expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                    </IconButton> */}
                    </CardActions>
                    {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
                    <CommentList comments={post.comments} />
                    {/* </Collapse> */}
                    <Button>add comment</Button>
                </Card>
                {/* { this.state.isRemovePost && <RemovePostConfirm toggleRemovePost={this.onToggleRemovePost} />} */}
            </section>
        )
    }
}
const mapStateToProps = state => {
    return {
        posts: state.postModule.posts
    }
}

const mapDispatchToProps = {
    removePost
}



export const PostPreview = connect(mapStateToProps, mapDispatchToProps)(_PostPreview);






