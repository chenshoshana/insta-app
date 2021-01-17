import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'

export function AppHeader() {

    return (
        <section className="main-header">
            <header className="main-layout">
                <div className=" flex align-center space-between">
                    <div className="header-left flex align-center">
                    <div className="header-logo">
                <Link to="/">Insta-App</Link>
                </div>
                {/* <Link to="/login" className="login-btn">Login</Link>
                <Link to="/signup" className="signup-btn">Signup</Link> */}
                </div>
            <nav>
                <ul className="header-list flex justify-center clean-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/map">Map</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                </ul>
            </nav>
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