import {all, takeLatest, put} from 'redux-saga/effects';
import * as constants from './constants';
import * as actions from './actions';

function* handleLoading() {
    yield put(actions.setLoading())
}

export default function*() {
    yield all([
        yield takeLatest(constants.SET_LOADING, handleLoading)
    ])
}