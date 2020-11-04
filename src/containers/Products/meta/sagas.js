import { all, takeLatest, put, call } from 'redux-saga/effects';
import * as constants from './constants';
import * as actions from './actions';
import network from '../../../utils/network';

function* handleGetProducts() {
    try {
       const response = yield call(network.getData, '/products?prodDepartment[in]=mobile_cover');
       console.log(response); 
    } catch (error) {
        console.log(error);
    }
}


export default function*() {
    yield all([
        yield takeLatest(constants.GET_PRODUCTS, handleGetProducts)
    ])
}