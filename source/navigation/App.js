// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";

// Pages
import {Feed, Login, NewPassword, Profile, Signup} from '../pages';
import {book} from "./book";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.get('isAuthenticated')
    }
}

@hot(module)
@withRouter
@connect(mapStateToProps)
export default class App extends Component {
    render () {
        const isAuthenticated = this.props;

        return isAuthenticated ? (
            <Switch>
                <Route path={book.feed} component={Feed} />
                <Route path={book.profile} component={Profile} />
                <Route path={book.newPassword} component={NewPassword} />
                <Redirect to={book.feed} />
            </Switch>
        ) : (
            <Switch>
                <Route path={book.login} component={Login} />
                <Route path={book.signUp} component={Signup} />
                <Redirect to={book.login} />
            </Switch>
        )
    }
}
