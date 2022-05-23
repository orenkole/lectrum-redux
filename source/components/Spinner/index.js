// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        isFetching: state.ui.get('isFetching')
    }
}

@connect(mapStateToProps())
export default class Spinner extends Component {
    render () {
        const { isFetching } = this.props;

        return isFetching ? <div className = { Styles.spinner } /> : null;
    }
}
