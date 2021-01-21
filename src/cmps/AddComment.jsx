import { React, Component } from 'react'
import { addComment } from '../store/action/commentActions.js'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';

export class _AddComment extends Component {

    state = {
        comment: {
            txt: null,
            user: {
                "_id": "sadad748",
                "username": "abraham_lincoln",
                "imgUrl": "https://www.goodesign.co.il/wp-content/uploads/2017/03/HIPSTORY-Shimoni-Lincoln.jpg"
            },
            likes: [],
            createdAt: Date.now()
        }
    }


    onSaveComment = async ev => {
        ev.preventDefault()
        const savedComment = this.state.comment
        if (!this.state.comment.txt) return alert('Can not upload empty comment')
        await addComment(savedComment)
        this.setState({ savedComment: { txt: '' } })
        this.props.addCommentFalse()
    }

    onInputChange = (ev) => {//on input change
        console.log('ev.target.value:', ev.target.value);
        const comment = { ...this.state.comment };
        comment[ev.target.name] = ev.target.value;
        console.log(comment[ev.target.name]);
        this.setState({
            comment: comment
        });
    };



    render() {
        return (
            <section>
                avatar={
                    <Avatar aria-label="recipe" className={"avatar"}>
                        <img src={post.user.imgUrl} />
                    </Avatar>
                }
                <input type="txt"/>

            </section>
        )


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

