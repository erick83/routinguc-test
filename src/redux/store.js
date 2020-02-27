import { createStore, combineReducers } from 'redux';
import userReducer from './user/reducer'

const reducers = combineReducers({
    user: userReducer,
})

export default createStore(
    reducers,
    //TODO: Disable on production
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
