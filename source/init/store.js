import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./rootReducer";
import {createLogger} from "redux-logger/src";

const logger = createLogger({
    duration: true,
    collapsed: true,
    colors: {
        title: () => 'lightblue',
        prevState: () => 'darkblue',
        action: () => 'lightgreen',
        nextState: () => 'orange',
        error: () => 'red',
    }
})


const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;
const enhancedStore = composeEnhancers(applyMiddleware(logger));

const preloadedState = JSON.parse(localStorage.getItem('gallery'))

export const store = preloadedState
    ? createStore(rootReducer, preloadedState, enhancedStore)
    : createStore(rootReducer, enhancedStore);

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('gallery', JSON.stringify(state))
})
