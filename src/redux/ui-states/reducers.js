import { OPEN_SIDE_MENU, CLOSE_SIDE_MENU } from './actions'

const initialState = {
    sideMenu: {
        show: false,
    }
}

export default function uiStatesReducer(state = initialState, action) {
    const { type } = action
    switch (type) {
        case OPEN_SIDE_MENU: {
            return {
                ...state,
                sideMenu: {
                    ...state.sideMenu,
                    show: true,
                }
            }
        }
        case CLOSE_SIDE_MENU:
            return {
                ...state,
                sideMenu: {
                    ...state.sideMenu,
                    show: false,
                }
            }
        default:
            return state
    }
}
