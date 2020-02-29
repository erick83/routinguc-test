import { post } from '../../services/fetchService'
import { requestPending, requestSuccess, requestError } from '../request-state/actions'

// Actions types

export const SIGNUP_START = 'USER_SIGNUP_START'
export const SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const SIGNUP_ERROR = 'USER_SIGNUP_ERROR'
export const LOGIN_START = 'USER_LOGIN_START'
export const LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const LOGIN_ERROR = 'USER_LOGIN_ERROR'
export const LOAD_SESION = 'USER_LOAD_SESION'

export const LOGOUT = 'USER_LOGOUT'

// Action creators

export const loadSesion = payload => ({
    type: LOAD_SESION,
    payload
})

export const userLogout = () => ({
    type: LOGOUT,
})

export const loginError = error => ({
    type: LOGIN_ERROR,
    payload: error
})

// Async Actions creators

export const userSignup = () => dispatch => {
    debugger
    dispatch({ type: SIGNUP_START })

    // const result = await post('signup')

    // console.log(result)
}

export const userLogin = payload => async dispatch => {
    dispatch({ type: LOGIN_START })
    dispatch(requestPending())

    const result = await post('login', payload)

    if (result.status && result.status === 'failure') {
        dispatch(loginError(result.errors.join('. ')))
        dispatch(requestError())
    } else {
        const user = {
            user: result.user.username,
            email: result.user.email,
        }

        dispatch({
            type: LOGIN_SUCCESS,
            payload: user,
        })

        sessionStorage.setItem('routinguc-test-user', JSON.stringify(user))

        dispatch(requestSuccess())
    }
}
