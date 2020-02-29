import { post } from '../../services/fetchService'

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

// Async Actions creators

export const userSignup = () => dispatch => {
    debugger
    dispatch({ type: SIGNUP_START })

    // const result = await post('signup')

    // console.log(result)
}

export const userLogin = payload => async dispatch => {
    dispatch({ type: LOGIN_START })

    try {
        const result = await post('login', payload)
        const user = {
            user: result.user.username,
            email: result.user.email,
        }

        dispatch({
            type: LOGIN_SUCCESS,
            payload: user,
        })

        sessionStorage.setItem('routinguc-test-user', JSON.stringify(user))

    } catch(error) {
        dispatch({
            type: LOGIN_ERROR,
        })
        console.error(error)
    }
}
