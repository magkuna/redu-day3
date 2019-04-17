import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

import users from './state/users'

import thunk from 'redux'

const rootReducer = combineReducers({
    users
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)