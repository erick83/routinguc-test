import { get } from '../../services/fetchService'
import { requestPending, requestSuccess, requestError } from '../request-state/actions'
import { parsePoints } from '../../services/util'

// Actions types

export const GET_START = 'MAP_DATA_GET_START'
export const GET_SUCCESS = 'MAP_DATA_GET_SUCCESS'
export const GET_ERROR = 'MAP_DATA_GET_ERROR'

// Async creators

export const mapDataFetch = (payload = {limit: 5, status: null}) => async dispatch => {
    dispatch({ type: GET_START })
    dispatch(requestPending())

    const { limit, status } = payload

    try {
        const result = await get('map', {limit, status})

        if (result.status && result.status === 'success') {
            const raw = result.points
            const points = parsePoints(raw)

            dispatch({
                type: GET_SUCCESS,
                payload: {
                    raw,
                    points,
                },
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
