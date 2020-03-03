import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

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

const composeEnhancers = composeWithDevTools({})

export default createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk),
    )
)
