// Core
import React, { Component } from 'react';
import { List } from 'immutable';
import FlipMove from 'react-flip-move';
import {connect} from "react-redux";

// Instruments
import Styles from './styles.m.css';
import { mockedProfile } from '../../instruments/mockedData';

// Components
import { Composer, Catcher, Post } from '../../components';
import {postsActions} from "../../bus/posts/actions";
import {bindActionCreators} from "redux";
import {userActions} from "../../bus/users/actions";

const mapStateToProps = state => {
    return {
        posts: state.posts,
        profile: state.profile,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            fetchPostsAsync: postsActions.fetchPostsAsync,
            ...userActions,
        }, dispatch)
    }
}

@connect(
    mapStateToProps,
    mapDispatchToProps
)
export default class Posts extends Component {
    componentDidMount () {
        const { actions } = this.props;

        actions.fetchPostsAsync();
        actions.fetchUsersAsync();
    }

    render () {
        const { actions, posts, profile } = this.props;

        const postsJSX = posts.map((post) => {
            return (
                <Catcher key = { post.get('id') }>
                    <Post
                        actions = { actions }
                        author = { post.get('author') }
                        comment = { post.get('comment') }
                        created = { post.get('created') }
                        id = { post.get('id') }
                        likes = { post.get('likes') }
                        profile = { profile }
                    />
                </Catcher>
            );
        });

        return (
            <section className = { Styles.posts }>
                <Composer actions = { actions } profile = { profile } />
                <FlipMove>{postsJSX}</FlipMove>
            </section>
        );
    }
}
