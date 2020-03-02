import { post, del } from '../../services/fetchService'
import { requestPending, requestSuccess, requestError } from '../request-state/actions'
import { setSesionData, clearSesion } from '../../services/sesionService'

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

export const loginError = error => ({
    type: LOGIN_ERROR,
    payload: error
})

export const signupError = error => ({
    type: SIGNUP_ERROR,
    payload: error
})

export const cleanSesion = () => ({
    type: LOGOUT
})

// Async Actions creators

export const userSignup = payload => async dispatch => {
    dispatch({ type: SIGNUP_START })
    dispatch(requestPending())

    try {
        const result = await post('signup', payload)

        if (result.status && result.status === 'success') {
            const user = {
                user: result.user.username,
                email: result.user.email,
            }

            dispatch({
                type: SIGNUP_SUCCESS,
                payload: user,
            })

            setSesionData(user)

            dispatch(requestSuccess())
        } else {
            dispatch(signupError(result.errors.join('. ')))
            dispatch(requestError())
        }
    } catch (error) {
        throw error
    }
}

export const userLogin = payload => async dispatch => {
    dispatch({ type: LOGIN_START })
    dispatch(requestPending())

    try {
        const result = await post('login', payload)

        if (result.status && result.status === 'success') {
            const user = {
                user: result.user.username,
                email: result.user.email,
            }

            dispatch({
                type: LOGIN_SUCCESS,
                payload: user,
            })

            setSesionData(user)

            dispatch(requestSuccess())

        } else {
            if (result.error && result.error[0] === 'a user already logged in') {
                const error = new Error(`${result.error[0]}. Please try to login again`)
                error.name = 'Logged Error'
                throw error
            } else {
                const error = new Error(result.error.join('. '))
                error.name = 'Response Error'
            }
        }
    } catch (e) {
        if (e.name && e.name === 'Logged Error') {
            sessionStorage.removeItem('routinguc-test-user')
            dispatch(loginError(e.message))
            dispatch(requestError())
            dispatch(userLogout())
        } else if (e.name === 'Response Error') {
            dispatch(loginError(e.message))
            dispatch(requestError())
            clearSesion()
        } else {
            console.error(e)
        }
    }
}

// TODO: Check if is need a callback to redirect route on logout
export const userLogout = () => async dispatch => {
    dispatch(requestPending())
    dispatch({ type: LOGOUT })
    clearSesion()
    try {
        const result = await del('logout')
        if (result.status && result.status === 'success') {
            dispatch(requestSuccess())
        } else {
            const error = new Error(result.error.join('. '))
            throw error
        }
    } catch(e) {
        dispatch(requestError())
        console.error(e)
    }
}
