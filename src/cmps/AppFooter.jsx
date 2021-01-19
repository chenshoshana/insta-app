import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'

export function AppFooter() {

    return (
        <section className="main-footer">
            <footer className="main-layout">
                <div className=" flex align-center space-between">
                    <div className="footer-left flex align-center">
                    <div><Link to="/">UserProf</Link></div>
                    </div>
                    <ul className="footer-list flex justify-center clean-list">
                   
                    <li><Link to="/">👜</Link></li>
                        <li><Link to="/chat">➕</Link></li>
                        <li><Link to="/favorites">🔍</Link></li>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </div>
            </footer>
        </section >
    )
}

// const mapStateToProps = () => {
//     return {
//         loggedInUser: 'User',
//     }
// }

// export const AppHeader = connect(mapStateToProps)(_AppHeader);