import { Component } from 'react'
import { connect } from 'react-redux'
import { PostList } from './PostList.jsx'
import { loadPosts } from '../store/action/postActions.js'
import { AddPost } from '../cmps/AddPost.jsx'
import { AppFooter } from '../cmps/AppFooter.jsx'

class _InstaApp extends Component {

    // state = {
    //     isNewPost: false
    // }

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

    // onRemove = (eventiId) => {
    //     this.props.removeEventi(eventiId)

    // }

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

        return (
            <section className="app-body">
                <PostList posts={posts} />
                {/* {this.state.isNewPost && <AddPost toggleAddPost={this.onToggleAddPost} />} */}
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
    loadPosts
}



export const InstaApp = connect(mapStateToProps, mapDispatchToProps)(_InstaApp);
