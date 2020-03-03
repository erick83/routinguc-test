import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import userReducer from './user/reducer'
import uiStatesReducer from './ui-states/reducers'
import requestStateReducer from './request-state/reducer'
import userListReducer from './user-list/reducer'
import mapDataReducer from './map-data/reducer'

const reducer = combineReducers({
    user: userReducer,
    ui: uiStatesReducer,
    request: requestStateReducer,
    userList: userListReducer,
    mapData: mapDataReducer,
})

export default createStore(
    reducer,
    applyMiddleware(thunk),
)
