import { SUCCESS, PENDING, ERROR } from './actions'

const initialState = {
    loading: false,
}

function requestStateReducer (state = initialState, action) {
    const { type } = action

    switch (type) {
        case PENDING:
            return {
                loading: true,
            }
        case SUCCESS:
        case ERROR:
        default:
            return {
                loading: false
            }
    }
}

export default requestStateReducer
