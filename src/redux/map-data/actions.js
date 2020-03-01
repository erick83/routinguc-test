import { get } from '../../services/fetchService'
import { requestPending, requestSuccess, requestError } from '../request-state/actions'

// Actions types

export const GET_START = 'MAP_DATA_GET_START'
export const GET_SUCCESS = 'MAP_DATA_GET_SUCCESS'
export const GET_ERROR = 'MAP_DATA_GET_ERROR'

// Async creators

export const mapDataFetch = (payload = {total: {max: 50, min: 0}, status: {options:['CREATED']}}) => async dispatch => {
    dispatch({ type: GET_START })
    dispatch(requestPending())

    const { total, status } = payload

    try {
        const result = await get('data', {total, status})

        if (result.status && result.status === 'success') {
            const { points } = result
            dispatch({
                type: GET_SUCCESS,
                payload: points,
            })
            dispatch(requestSuccess())
        } else {
            dispatch({
                type: GET_ERROR,
                payload: result.errors.join('. '),
            })
            dispatch(requestError())
        }
    } catch (error) {
        throw error
    }
}