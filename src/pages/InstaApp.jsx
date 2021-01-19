import { Component } from 'react'
import { connect } from 'react-redux'
import { PostList } from './PostList.jsx'
import { loadPosts, removePost } from '../store/action/postActions.js'
import { AddPost } from '../cmps/AddPost.jsx'
import { AppFooter } from '../cmps/AppFooter.jsx'

class _InstaApp extends Component {

    state = {
        isNewPost: false
    }

    onAddPostTrue = () => {
        console.log('is post true- before', this.state);
        if (!this.state.isNewPost) this.setState({ isNewPost: true })
    }

    onAddPostFalse = () => {
        console.log('is post false- before', this.state);
        if (this.state.isNewPost) this.setState({ isNewPost: false })
    }

    // onToggleAddPost = () => {
    //     if (this.state.isNewPost) this.setState({ isNewPost: false })
    //     else this.setState({ isNewPost: true })
    // }

    // componentDidMount() {
    //     const some = loadPosts(this.props.filterBy)
    //     console.log('this',some);
    // }

    componentDidMount() {
        this.props.loadPosts(this.props.filterBy)

    }
    // onRemovePost = (postId) => {
    //     console.log(this.state.post);
    //     this.props.removePost(postId)
    //     this.props.printMsg('Post was removed')
    //     setTimeout(() => {
    //         this.props.printMsg('')
    //     }, 2000)
    //     this.props.history.push('/post')



    // onSetFilter = (filterBy) => {
    //     this.props.setFilter(filterBy)
    //     this.props.loadEventis(filterBy)

    // }

    // doLogout = async () => {
    //     await this.props.logout()
    //     this.setState({ loggedInUser: null }, () => this.props.history.push('/'))
    // }

    render() {
        const { posts } = this.props
        console.log('enter render')
        return (
            <section className="app-body">
                <PostList posts={posts} />
                <div>
                    <button className="add-post-btn" onClick={this.onAddPostTrue}>➕</button>
                </div>
                {this.state.isNewPost && <AddPost addPostFalse={this.onAddPostFalse} />}
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
    loadPosts,
    removePost
}



export const InstaApp = connect(mapStateToProps, mapDispatchToProps)(_InstaApp);
