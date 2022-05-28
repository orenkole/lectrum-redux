// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import {withRouter} from "react-router-dom";

// Pages
import {connect} from "react-redux";
import Private from "./Private";
import Public from "./Public";
import {authAction} from "../bus/auth/actions";

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.get('isAuthenticated')
    }
}

const mapDispatchToProps = {
    authenticateAsync: authAction.authenticateAsync,
}

@hot(module)
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
    componentDidMount() {
        this.props.authenticateAsync()
    }

    render () {
        const isAuthenticated = this.props;

        return isAuthenticated ? <Private /> : <Public />
    }
}
