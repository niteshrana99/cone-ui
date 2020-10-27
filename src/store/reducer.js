import { combineReducers } from 'redux';
import appReducer from '../containers/App/meta/reducer';

export default combineReducers({
    app:appReducer
});