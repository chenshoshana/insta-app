import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'

export function AppHeader() {
    return (
        <section className="main-header">
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
                    <ul className="header-list flex justify-center clean-list">
                        <li><Link to="/chat">📝</Link></li>
                        <li><Link to="/favorites">🤍</Link></li>
                        {/* <li><Link to="/eventi">Map</Link></li> */}
                    </ul>

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