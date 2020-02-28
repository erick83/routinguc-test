// Actions types

export const CREATE = 'USER_CREATE'
export const LOGIN = 'USER_LOGIN'
export const LOGOUT = 'USER_LOGOUT'
export const LIST = 'USER_LIST_GET'

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

export const userList = payload => ({
    type: userList,
    payload,
})
