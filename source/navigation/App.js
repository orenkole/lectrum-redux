// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import {withRouter} from "react-router-dom";

// Pages
import {connect} from "react-redux";
import Private from "./Private";
import Public from "./Public";
import {authAction} from "../bus/auth/actions";
import {Loading} from "../components";
import {joinSocketChannel, socket} from "../init/socket";
import {socketActions} from "../bus/socket/action";

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.get('isAuthenticated'),
        isInitialized: state.auth.get('isInitialized'),
    }
}

const mapDispatchToProps = {
    authenticateAsync: authAction.authenticateAsync,
    ...socketActions,
}

@hot(module)
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
    componentDidMount() {
        const {listenConnection, listenPosts} = this.props.socket;
        this.props.authenticateAsync();
        listenConnection();
        joinSocketChannel();
    }

    componentWillMount() {
        socket.removeListener('connect')
        socket.removeListener('disconnect')
    }

    render () {
        const {
            isAuthenticated,
            isInitialized,
            listenPosts,
        } = this.props;

        if (!isInitialized) {
            return <Loading />
        }

        return isAuthenticated ? <Private listenPosts={listenPosts}/> : <Public />
    }
}
