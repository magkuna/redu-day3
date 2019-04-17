const SET = 'users/SET'

export const fetchUsersAsyncActionCreator = () = (dispatch, getState) => {
    if (props._users === null) {
        fetch('https://randomuser.me/api')
            .then(response => response.json())
            .then(data => {
                dispatch(
                    setUsersActionCreator(
                        data.results
                    )
                )
            })
    }

    export const setUsersActionCreator = users => ({
        type: SET,
        users,
    })



    const initialState = {
        users: null,
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

