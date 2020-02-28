import { LIST } from './actions'

const initialState = {
    users: []
}

function userListReducer (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case LIST:
            return {
                users: [...payload]
            }
        default:
            return state
    }
}

export default userListReducer
