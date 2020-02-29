import { SUCCESS, PENDING, ERROR, NO_REQUEST } from './actions'

const initialState = {
    status: NO_REQUEST,
    loading: false,
}

function requestStateReducer (state = initialState, action) {
    const { type } = action

    switch (type) {
        case PENDING:
            return Object.assign({}, state, {
                status: type,
                loading: true,
            })
        case SUCCESS:
        case ERROR:
        case NO_REQUEST:
            return Object.assign({}, state, {
                status: type,
                loading: false,
            })
        default:
            return state
    }
}

export default requestStateReducer
