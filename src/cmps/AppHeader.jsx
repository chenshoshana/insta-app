import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';

// import { connect } from 'react-redux'

export function AppHeader(props) {
    console.log('enter appHeader:', props.user);
    // const img = this.props.user.imgUrl

    return (
        <section className="main-header main-layout">
            <header>
                <div className="header-container flex align-center space-between">
                    <div className="header-left flex align-center">
                        <div className="header-logo">
                            <Link to="/">InstaApp</Link>
                        </div>
                        {/* <Link to="/login" className="login-btn">Login</Link> */}
                        {/* <Link to="/signup" className="signup-btn">Signup</Link> */}
                        {/* <button className="login-btn">Login</button> */}
                        {/* <button className="signup-btn">Signup</button> */}
                    </div>
                    <input type="text" name="text" placeholder="Search" autoComplete="off" className="search-input" />
                    <ul className="header-list flex justify-center clean-list">
                        <li><Link to="/chat">📝</Link></li>
                        <li><Link to="/favorites">🤍</Link></li>
                        {/* <i class="far fa-plus-square"></i> */}
                        {/* <li><Link to="/eventi">Map</Link></li> */}
                    </ul>
                    <Avatar aria-label="recipe" className={"avatar"}>
                        {/* <img src={user.imgUrl} /> */}
                    </Avatar>


                </div>
            </header >
            {/* <h3>Welcome <Link to="/profile">{loggedInUser.username}</Link></h3> */}
        </section >
    )
}

// const mapStateToProps = () => {
//     return {
//         loggedInUser: 'User',
//     }
// }

// export const AppHeader = connect(mapStateToProps)(_AppHeader);