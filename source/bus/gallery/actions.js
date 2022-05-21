import {SHOW_NEXT_PHOTO, SHOW_SELECTED_PHOTO} from "./types";

export const showNextPhoto = () => ({
    type: SHOW_NEXT_PHOTO,
})

export const showSelectedPhoto = (photoIndex) => ({
    type: SHOW_SELECTED_PHOTO,
    payload: photoIndex
})
