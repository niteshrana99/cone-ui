import { combineReducers } from 'redux';
import appReducer from '../containers/App/meta/reducer';
import productsReducer from '../containers/Products/meta/reducer';

export default combineReducers({
    app:appReducer,
    products: productsReducer
});