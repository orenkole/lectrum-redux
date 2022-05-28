import {groupId, MAIN_URL} from "./config";

export const api = {
    auth: {
        signup (userInfo) {
            return fetch(`${MAIN_URL}/user/${groupId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userInfo)
            })
        }
    },
    posts: {
        fetch() {
            return fetch(`${MAIN_URL}`, {
                method: 'GET',
                headers: {
                    'x-no-auth': groupId
                }
            })
        }
    }
}
