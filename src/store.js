import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

import users, {fetchUsersAsyncActionCreator} from './state/users'

import thunk from 'redux-thunk'

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

store.dispatch(fetchUsersAsyncActionCreator(10))