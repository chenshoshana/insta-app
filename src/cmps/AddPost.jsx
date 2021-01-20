import { React, Component } from 'react'
import { addPost } from '../store/action/postActions.js'
import { connect } from 'react-redux'

import { postService } from '../service/postService.js'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { cloudinaryService } from '../service/cloudinaryService.js';


export class _AddPost extends Component {

    state = {
        post: {
            title: '',
            imgUrl: null,
            createdAt: Date.now(),
            user: {
                "_id": "sadad748",
                "username": "abraham_lincoln",
                "imgUrl": "https://www.goodesign.co.il/wp-content/uploads/2017/03/HIPSTORY-Shimoni-Lincoln.jpg"
            },
            comments: [],
            likes: []
        }

    }

    onUploadImg = async (ev) => {
        const imgUrl = await cloudinaryService.uploadImg(ev.target.files[0]);
        console.log('imgUrl', imgUrl)
        const postCopy = { ...this.state.post, imgUrl: imgUrl }
        this.setState({ post: postCopy }, ()=> {
            console.log('this.state.post', this.state.post)
        })
    }

    // onSavePost = (ev) => {//on submit
    //     ev.preventDefault();

    //     postService.savePost(this.state.post)
    //         .then(savedPost => {
    //             console.log('Saves succesfully', savedPost);
    //             this.props.history.push('/');//this.context.history.push('/path')
    //         })

    // };

    onSavePost = async ev => {
        ev.preventDefault()
        console.log('this.state', this.state)
        const savedPost = this.state.post
        console.log('this.state.post.title:', this.state.post.title);
        if (!this.state.post.title || !this.state.post.imgUrl) return alert('All fields are required')
        await this.props.addPost(savedPost)
        this.setState({ savedPost: { title: '', imgUrl: '' } })
    }

    onInputChange = (ev) => {//on input change
        console.log('ev.target.value:', ev.target.value);
        const post = { ...this.state.post };
        post[ev.target.name] = ev.target.value;
        console.log(post[ev.target.name]);
        this.setState({
            post
        });
    };

    // handleInput = ({ target }) => {
    //     const { name, type } = target
    //     const value = (type === 'checkbox') ? target.checked :
    //         (type === 'number') ? +target.value : target.value

    //     this.setState(prevState => {
    //         return {
    //             toy: {
    //                 ...prevState.toy,
    //                 [name]: value
    //             }
    //         }
    //     })
    // }

    // onAddPostToView = () => {
    //     postService.add(this.state.post)
    //         .then(savedPost => {
    //             this.props.addPost()
    //         })
    // }

    // render() {
    //     return (
    //         <Card className={"root"}>
    //             <CardActionArea>

    //                 <CardContent>
    //                     <Typography gutterBottom variant="h5" component="h2">
    //                         New post
    //           </Typography>
    //                     <Typography variant="body2" color="textSecondary" component="p">
    //                         Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
    //                         across all continents except Antarctica
    //           </Typography>
    //                 </CardContent>
    //                 <CardMedia
    //                     component="img"
    //                     alt="Contemplative Reptile"
    //                     height="140"
    //                     image="/static/images/cards/contemplative-reptile.jpg"
    //                     title="Contemplative Reptile"
    //                 />
    //             </CardActionArea>
    //             <CardActions>
    //                 <Button size="small" color="primary">
    //                     Add
    //         </Button>
    //             </CardActions>
    //         </Card>
    //     );
    // }

    render() {
        const imageState = (this.state.post.imgUrl)? <img src={this.state.post.imgUrl} /> : <label htmlFor="imgUploader" className="add-post-modal-img-up">🖼</label>
        console.log('this.state.post.imgUrl', this.state.post.imgUrl)
        console.log('imageState', imageState)
        return (
            <div className="screen">
                <div className="modal">
                    <form className="add-post-modal">
                        <div className="add-post-modal-close-btn-container">
                            <button className="add-post-modal-close-btn" onClick={this.props.addPostFalse}>X</button>
                        </div>
                        <h4>New post</h4>
                        <textarea rows="1" placeholder="Write here" name="title" className="add-post-modal-textarea" onChange={this.onInputChange}></textarea>
                        {/* <label htmlFor="imgUploader" className="add-post-modal-img-up">🖼</label> */}
                        <input type="file" accept="image/*" id="imgUploader" name="imgUrl" onChange={this.onUploadImg} hidden />
                        {imageState}
                        <div className="add-post-btn-container">
                            <button type="submit" className="add-post-modal-btn" onClick={this.onSavePost}>Add</button>
                        </div>
                        
                    </form>
                </div>
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
    addPost
}

export const AddPost = connect(mapStateToProps, mapDispatchToProps)(_AddPost)

