import { React, Component } from 'react'
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


export class AddPost extends Component {

    state = {
        post: {}

    }

    onSavePost = (ev) => {//on submit
        ev.preventDefault();

        postService.savePost(this.state.post)
            .then(savedPost => {
                console.log('Saves succesfully', savedPost);
                this.props.history.push('/');
            })

    };

    onInputChange = (ev) => {//on input change
        console.log('ev.target.value', ev.target.value);
        const post = { ...this.state.post };
        post[ev.target.name] = ev.target.value;
        this.setState({
            post
        });
    };

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
        console.log('enter render addPost');
        return (
            <div className="screen">
                <div className="modal">
                    <form className="add-post-modal">
                        <button className="add-post-modal-close-btn" onClick={this.props.addPostFalse}>X</button>
                        <h4>New Post</h4>
                        <textarea rows="1" placeholder="Write here" className="add-post-modal-textarea" onChange={this.onInputChange}></textarea>
                        <label htmlFor="imgUploader" className="add-post-modal-img-up">🖼</label>
                        <input type="file" id="imgUploader" name="img-uploader" />
                        <button type="submit" className="add-post-modal-btn" onClick={this.onSavePost}>Post</button>
                    </form>

                    {/* <form onSubmit={}> */}
                    {/* <table className="modal-tbl">
                    <tbody>
                        <tr>
                            <td><label htmlFor="epost">To:</label></td>
                            <td><input type="epost" name="To" autoComplete="off" required /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="epost">Cc:</label></td>
                            <td><input type="epost" name="Cc" autoComplete="off" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="epost">Bcc:</label></td>
                            <td><input ref={this.refInput} type="Bcc" name="epost" autoComplete="off" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="subject">Subject:</label></td>
                            <td><input type="text" id="name" name="subject" placeholder="" required autoComplete="off"
                                onChange={this.onInputChange} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="comment"></label></td>
                        </tr>
                    </tbody>
                </table>
                <textarea name="body" form="usrform" onChange={this.onInputChange}></textarea><br />
                <button type="submit" className="send-btn" onClick={this.onAddPostToView}>Send</button> */}
                    {/* </form> */}
                </div>
            </div>
        );

    }


}

// const mapStateToProps = state => {
//     return {
//         posts: state.postModule.posts,
//     }
// }

// const mapDispatchToProps = {
//     editComment,
//     addComment
// }

// export const AddPost = connect(mapStateToProps, mapDispatchToProps)(_AddPost)

/////////////////////////////////////////////////////
