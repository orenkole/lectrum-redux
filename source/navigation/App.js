// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import {Redirect, Route, Switch} from "react-router-dom";

// Pages
import {Feed, Login, NewPassword, Profile, Signup} from '../pages';
import {book} from "./book";

@hot(module)
export default class App extends Component {
    render () {
        return (
            <Switch>
                <Route path={book.login} component={Login} />
                <Route path={book.signUp} component={Signup} />
                <Route path={book.feed} component={Feed} />
                <Route path={book.profile} component={Profile} />
                <Route path={book.newPassword} component={NewPassword} />
                <Redirect to={book.login} />
            </Switch>
        );
    }
}
