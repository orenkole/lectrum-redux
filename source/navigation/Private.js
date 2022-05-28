// Core
import React, { Component } from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

// Pages
import {Feed, NewPassword, Profile} from '../pages';
import {book} from "./book";

export default class Private extends Component {
    render () {
        return <Switch>
            <Route path={book.feed} component={Feed} />
            <Route path={book.profile} component={Profile} />
            <Route path={book.newPassword} component={NewPassword} />
            <Redirect to={book.feed} />
        </Switch>
    }
}
