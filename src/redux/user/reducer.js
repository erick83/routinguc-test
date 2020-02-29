import {
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    LOGIN_START,
    LOGIN_SUCCESS,
    // LOGIN_ERROR,
    LOGOUT,
    LOAD_SESION,
    LOGIN_ERROR,
} from './actions'

const initialState = {
    user: null,
    logged: true,
    errorMessage: null,
    sesionCookie: null,
}

export default function userReducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case SIGNUP_SUCCESS:
        case LOGIN_SUCCESS:
        case LOAD_SESION:
            return Object.assign({}, state, {
                user: payload,
                logged: true,
            })

        case LOGIN_ERROR:
        case SIGNUP_ERROR:
            return Object.assign({}, initialState, {
                logged: false,
                errorMessage: payload,
            })

        case LOGOUT:
            return Object.assign({}, initialState, {
                logged: false,
            })

        case SIGNUP_START:
        case LOGIN_START:
        default:
            return state
    }
}
