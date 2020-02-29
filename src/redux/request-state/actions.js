// Action types

export const NO_REQUEST = 'NO_REQUEST'
export const PENDING = 'REQUEST_PENDING'
export const SUCCESS = 'REQUEST_SUCCESS'
export const ERROR = 'REQUEST_ERROR'

// Action creators

export const requestNoRequest = ({
    type: NO_REQUEST
})

export const requestPending = () => ({
    type: PENDING
})

export const requestSuccess = () => ({
    type: SUCCESS
})

export const requestError = () => ({
    type: ERROR
})
