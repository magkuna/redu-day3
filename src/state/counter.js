import { database } from '../firebaseConf'

const SET = 'counter/SET'

export const incAsyncAsyncActionCreator = () => (dispatch, getState) => {
    const state = getState()
    const currentNumber = state.counter.number

    if (currentNumber !== null) {
        database.ref('counter').set(currentNumber + 1)
    }
}

export const startCounterSyncAsyncAction = () => (dispatch, getState) => {
    database.ref('counter').on(
        'value',
        (snapshot) => {
            dispatch(
                setActionCreator(
                    snapshot.val()
                )
            )
        }
    )
}

export const setActionCreator = number => ({
    type: SET,
    number
})

const initialState = {
    number: null
}


export default (state = initialState, action) => {
    switch (action.type) {
        case SET:
            return {
                ...state,
                number: action.number
            }
        default:
            return state
    }
}