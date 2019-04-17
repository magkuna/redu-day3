const SET = 'users/SET'
const FETCH_START = 'users/FETCH_START'
const FETCH_END = 'users/FETCH_END'
const FETCH_FAILED = 'users/FETCH_FAILED'

export const fetchUsersAsyncActionCreator = (numberOfUsers = 1) => (dispatch, getState) => {

    fetch('https://randomuser.me/api?results=' + numberOfUsers)
        .then(response => response.json())
        .then(data => {
            dispatch(
                setUsersActionCreator(
                    data.results
                )
            )
        })
        .catch(() => { })
        .finally(() => { })
}

const setUsersActionCreator = users => ({
    type: SET,
    users,
})

const fetchStartActionCreator = () => ({type: FETCH_START})
const fetchEndActionCreator = () => ({type: FETCH_END})
const fetchFailedActionCreator = () => ({type: FETCH_FAILED})



const initialState = {
    users: null,
    isLoading: false,
    isError: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET:
            return {
                ...state,
                users: action.users
            }

        default:
            return state
    }
}

