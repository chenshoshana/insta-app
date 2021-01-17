import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader.jsx'
import { Home } from './pages/Home.jsx'
// import { About } from './pages/About.jsx'
// import Login from './pages/Login.jsx'
// import { Signup } from './pages/Signup.jsx'
// import { UserDetails } from './pages/UserDetails.jsx'
// import { HostDetails } from './pages/HostDetails.jsx'
// import { ChatApp } from './cmps/ChatApp.jsx'
import { InstaApp } from './pages/InstaApp.jsx'
import { PostsList } from './pages/PostsList.jsx'
import { PostDetails } from './cmps/PostDetails.jsx'
import { PostEdit } from './pages/PostEdit.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'
import './assets/scss/main.scss';



export class App extends Component {
    render() {
        return (<React.Fragment>
            <AppHeader />
            <Switch>
                {/* <Route component={PostEdit} path="/edit/:postId?" /> */}
                <Route component={PostDetails} path="/post/:postId" />
                {/* <Route component={ChatApp} path="/chat" /> */}
                {/* <Route component={Admin} path="/admin/userId:" /> */}
                {/* <Route component={UserDetails} path="/user/userId:" /> */}
                {/* <Route component={About} path="/about" /> */}
                {/* <Route component={Signup} path="/signup" /> */}
                {/* <Route component={Login} path="/login" /> */}
                <Route component={Home} path="/" />
            </Switch>
            <AppFooter />
        </React.Fragment>
        )
    }


}
