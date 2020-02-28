import { createStore, combineReducers } from 'redux';
import userReducer from './user/reducer'
import uiStatesReducer from './ui-states/reducers'

const reducers = combineReducers({
    user: userReducer,
    ui: uiStatesReducer,
})

export default createStore(
    reducers,
    //TODO: Disable on production
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
