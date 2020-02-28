import { CREATE, LOGIN, LOGOUT } from './actions'

const initialState = {
    user: null,
    logged: false,
    sesionCookie: null,
}

export default function userReducer(state = initialState, action) {
    const { type, payload } = action

    console.log(action)

    switch (type) {
        case CREATE:
            return {
                ...state,
                user: payload,
            }

        case LOGIN:
            return payload

        case LOGOUT:
            return payload

        default:
            return state
    }
}
