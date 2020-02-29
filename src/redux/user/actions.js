import { post, del } from '../../services/fetchService'
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

export const loginError = error => ({
    type: LOGIN_ERROR,
    payload: error
})

export const signupError = error => ({
    type: SIGNUP_ERROR,
    payload: error
})

// Async Actions creators

export const userSignup = payload => async dispatch => {
    dispatch({ type: SIGNUP_START })
    dispatch(requestPending())

    try {
        const result = await post('signup', payload)

        if (result.status && result.status === 'failure') {
            dispatch(signupError(result.errors.join('. ')))
            dispatch(requestError())
        } else {
            const user = {
                user: result.user.username,
                email: result.user.email,
            }

            dispatch({
                type: SIGNUP_SUCCESS,
                payload: user,
            })

            sessionStorage.setItem('routinguc-test-user', JSON.stringify(user))

            dispatch(requestSuccess())
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
    } catch (error) {
        throw error
    }
}

// TODO: Check if is need a callback to redirect route on logout
export const userLogout = logoutRedirectCallback => async dispatch => {
    dispatch(requestPending())
    dispatch({ type: LOGOUT })
    sessionStorage.removeItem('routinguc-test-user')
    try {
        const result = await del('logout')
        console.log('userLogout', result)
        dispatch(requestSuccess())
    } catch(error) {
        dispatch(requestError())
        throw error
    }
}