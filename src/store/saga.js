import {all} from 'redux-saga/effects';
// import appSaga from '../containers/App/meta/sagas';
import productsSaga from '../containers/Products/meta/sagas';
export default function* saga() {
    yield all([
        productsSaga()
    ])
}