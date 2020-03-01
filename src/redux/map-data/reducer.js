import { GET_START, GET_SUCCESS, GET_ERROR } from './actions'

const initialState = {
    points: [],
    errorMessage: null,
}

function mapDataReducer (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case GET_SUCCESS:
            return Object.assign({}, state, {
                points: payload,
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
