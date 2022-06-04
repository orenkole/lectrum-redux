import {groupId, MAIN_URL} from "./config";

export const api = {
    get token () {
        return localStorage.getItem('token')
    },
    auth: {
        signup (userInfo) {
            return fetch(`${MAIN_URL}/user/${groupId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userInfo)
            })
        },
        login (credentials) {
            return fetch(`${MAIN_URL}/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials)
            })
        },
        authenticate() {
            return fetch(`${MAIN_URL}/user/login`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    body: JSON.stringify({token: this.token})
                }
            })
        },
        logout (credentials) {
            return fetch(`${MAIN_URL}/user/logout`, {
                method: 'GET',
                body: JSON.stringify(credentials)
            })
        }
    },
    posts: {
        fetch() {
            return fetch(`${MAIN_URL}`, {
                method: 'GET',
                headers: {
                    Authorization: this.token,
                }
            })
        },
        like(postId) {
            return fetch(`${MAIN_URL}/feed/${postId}`, {
                method: 'PUT',
                headers: {
                    Authorization: this.token,
                }
            })
        }
    },
    users: {
        fetch() {
            return fetch(`${MAIN_URL}/users/all/`, {
                method: 'GET',
                headers: {
                    Authorization: this.token
                }
            })
        }
    }
}
