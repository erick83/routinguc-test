// Action types

export const PENDING = 'REQUEST_PENDING'
export const SUCCESS = 'REQUEST_SUCCESS'
export const ERROR = 'REQUEST_ERROR'

// Action creators

export const requestPending = () => ({
    type: PENDING
})

export const requestSuccess = () => ({
    type: SUCCESS
})

export const requestError = () => ({
    type: ERROR
})
