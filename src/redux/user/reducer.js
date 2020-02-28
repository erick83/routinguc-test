import { CREATE, LOGIN, LOGOUT } from './actions'

const initialState = {
    user: null,
    logged: false,
    sesionCookie: null,
}

function userReducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case CREATE:
            return {
                ...initialState,
                user: payload.user,
            }

        case LOGIN:
            return payload

        case LOGOUT:
            return payload

        default:
            return state
    }
}

export default userReducer
