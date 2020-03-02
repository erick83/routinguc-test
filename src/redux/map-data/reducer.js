import { GET_START, GET_SUCCESS, GET_ERROR, UPDATE_LIMIT, UPDATE_STATUS } from './actions'

const initialState = {
    raw: [],
    points: [],
    limit: 5,
    status: "ALL",
    errorMessage: null,
}

function mapDataReducer (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case UPDATE_LIMIT:
            return Object.assign({}, state, {
                limit: payload
            })

        case UPDATE_STATUS:
            return Object.assign({}, state, {
                status: payload
            })

        case GET_SUCCESS:
            return Object.assign({}, state, {
                raw: payload.raw,
                points: payload.points,
            })

        case GET_ERROR:
            return Object.assign({}, state, {
                errorMessage: payload,
            })

        case GET_START:
        default:
            return state
    }
}

export default mapDataReducer
