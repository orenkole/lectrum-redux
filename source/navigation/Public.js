// Core
import React, { Component } from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

// Pages
import {Login, Signup} from '../pages';
import {book} from "./book";

export default class Public extends Component {
    render () {
        return <Switch>
            <Route path={book.login} component={Login} />
            <Route path={book.signUp} component={Signup} />
            <Redirect to={book.login} />
        </Switch>
    }
}
