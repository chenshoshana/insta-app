import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';

// import { connect } from 'react-redux'

export function AppHeader(props) {
    console.log('enter appHeader:', props.user);
    // const img = this.props.user.imgUrl

    // nav-layout needs flex justify center
    // main-layout need min-width 980px
    // main-layout need max-width 1200px

    return (
        <section className="main-header nav-layout">
            <header className="main-layout">
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
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEpUUJVqlxCFXUdaSn7ieT0ucZkZGX1NlmBQ&usqp=CAU" />
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