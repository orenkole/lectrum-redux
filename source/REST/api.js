import {groupId, MAIN_URL} from "./config";

export const api = {
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
