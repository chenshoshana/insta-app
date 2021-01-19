import { Link } from 'react-router-dom'
import { React, Component } from 'react'
import { AddPost } from './AddPost.jsx'

// import { connect } from 'react-redux'

export class AppFooter extends Component {

    state = {
        isNewPost: false
    }

    onToggleAddPost = () => {
        if (this.state.isNewPost) this.setState({ isNewPost: false })
        else this.setState({ isNewPost: true })
    }

    render() {
        return (
            <section className="main-footer">
                <footer className="main-layout">
                    <div className=" flex align-center space-between">
                        <div className="footer-left flex align-center">
                            <div><Link to="/">UserProf</Link></div>
                        </div>
                        <button className="add-post-btn" onClick={this.onToggleAddPost}>➕</button>

                        {/* <i className="far fa-plus-square"></i> */}
                        <ul className="footer-list flex justify-center clean-list">
                            <li><Link to="/">👜</Link></li>
                            {/* <li><Link to="/">➕</Link></li> */}
                            <li><Link to="/favorites">🔍</Link></li>
                            <li><Link to="/">Home</Link></li>
                        </ul>
                        {this.state.isNewPost && <AddPost toggleAddPost={this.onToggleAddPost} />}
                    </div>
                </footer>
            </section >
        )
    }
}

// const mapStateToProps = () => {
//     return {
//         loggedInUser: 'User',
//     }
// }

// export const AppHeader = connect(mapStateToProps)(_AppHeader);