import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';

// import { connect } from 'react-redux'

export function AppHeader() {

    // nav-layout needs flex justify center
    // main-layout need min-width 980px
    // main-layout need max-width 1200px
    return (
        <section className="main-header flex justify-center">
            <header className="header-layout">
                <div className="header-container flex align-center space-between">
                    <div className="header-left flex align-center">
                        <div className="header-logo">
                            <Link to="/">InstaApp</Link>{/*scrollIntoView(alignToTop)*/}
                        </div>
                        {/* <Link to="/login" className="login-btn">Login</Link> */}
                        {/* <Link to="/signup" className="signup-btn">Signup</Link> */}
                        {/* <button className="login-btn">Login</button> */}
                        {/* <button className="signup-btn">Signup</button> */}
                    </div>
                    <input type="text" name="text" placeholder="Search" autoComplete="off" className="search-input" />
                    <div className="header-list clean-list">
                        {/* <ul> */}
                        <div className="nav-icons flex space-between" >
                            <i className="fas fa-home"></i>
                            <i className="fab fa-facebook-messenger"></i>
                            <i className="far fa-compass"></i>
                            <i className="far fa-heart"></i>
                        </div>
                            {/* <i class="far fa-plus-square"></i> */}
                            {/* <li><Link to="/favorites">🤍</Link></li> */}
                            {/* <li><Link to="/chat">📝</Link></li> */}
                            {/* <li><Link to="/eventi">Map</Link></li> */}
                        {/* </ul> */}
                        <Avatar aria-label="recipe" className={"avatar"}>
                            <img src="https://www.goodesign.co.il/wp-content/uploads/2017/03/HIPSTORY-Shimoni-Lincoln.jpg" />
                        </Avatar>
                    </div>
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