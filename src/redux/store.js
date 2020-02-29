import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import userReducer from './user/reducer'
import uiStatesReducer from './ui-states/reducers'

const reducer = combineReducers({
    user: userReducer,
    ui: uiStatesReducer,
})

const composeEnhancers = composeWithDevTools({})

export default createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk),
    )
)
