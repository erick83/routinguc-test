import { get } from '../../services/fetchService'
import { requestPending, requestSuccess, requestError } from '../request-state/actions'

// Actions types

export const GET_START = 'USER_LIST_GET_START'
export const GET_SUCCESS = 'USER_LIST_GET_SUCCESS'
export const GET_ERROR = 'USER_LIST_GET_ERROR'

// Async creators

export const userListFetch = payload => async dispatch => {
    dispatch({ type: GET_START })
    dispatch(requestPending())

    try {
        const result = await get('users')

        if (result.status && result.status === 'failure') {
            dispatch({
                type: GET_ERROR,
                payload: result.errors.join('. '),
            })
            dispatch(requestError())
        } else {
            const users = result.users
            dispatch({
                type: GET_SUCCESS,
                payload: users,
            })
            dispatch(requestSuccess())
        }
    } catch (error) {
        throw error
    }
}
