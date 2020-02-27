// Actions Types

export const CREATE = 'USER_CREATE'
export const LOGIN = 'USER_LOGIN'
export const LOGOUT = 'USER_LOGOUT'

// Action creators

export const userCreate = payload => ({
    type: CREATE,
    payload,
})

export const userLogin = payload => ({
    type: LOGIN,
    payload,
})

export const userLogout = payload => ({
    type: LOGOUT,
    payload,
})
