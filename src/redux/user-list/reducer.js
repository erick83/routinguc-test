import { GET_START, GET_SUCCESS, GET_ERROR } from './actions'

const initialState = {
    users: [],
    errorMessage: null,
}

function userListReducer (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case GET_SUCCESS:
            return Object.assign({}, state, {
                users: payload,
            })
        case GET_ERROR:
            return Object.assign({}, state, {
                errorMessage: payload,
            })
        case GET_START:
        default:
            return state
    }
}

export default userListReducer
