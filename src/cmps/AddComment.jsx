import { React, Component } from 'react'
import { addComment } from '../store/action/commentActions.js'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';

class _AddComment extends Component {

    state = {
        comment: {
            txt: null,
            user: {
                "_id": "sadad748",
                "username": "abraham_lincoln",
                "imgUrl": "https://www.goodesign.co.il/wp-content/uploads/2017/03/HIPSTORY-Shimoni-Lincoln.jpg"
            },
            createdAt: Date.now()
        }
    }


    onSaveComment = async ev => {
        ev.preventDefault()
        const savedComment = this.state.comment
        // console.log('txt',this.state.comment.txt);
        if (!this.state.comment.txt) return alert('Can not upload empty comment')
        await addComment(savedComment)
        this.setState({ savedComment: { txt: '' } })
        // this.props.addCommentFalse()
    }

    onInputChange = (ev) => {//on input change
        // console.log('ev.target.value:', ev.target.value);
        const comment = { ...this.state.comment };
        comment.txt = ev.target.value;
        console.log(comment.txt);
        this.setState({
            comment: comment
        });
    };



    render() {
        return (
            <section>
                <form>
                    <Avatar aria-label="recipe" className={"avatar"}>
                        <img src="https:img.mako.co.il/2015/07/02/jfk.jpg" />
                    </Avatar>

                    <input type="txt" placeholder="add comment" onChange={this.onInputChange} />
                    <button onClick={this.onSaveComment}>add</button >
                    <button>x</button>
                </form>

            </section>
        )


    }
}
const mapStateToProps = state => {
    return {
        comments: state.postModule.comments
    }
}

const mapDispatchToProps = {
    addComment
}

export const AddComment = connect(mapStateToProps, mapDispatchToProps)(_AddComment)


