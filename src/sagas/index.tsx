import { all } from 'redux-saga/effects';
import { concertSaga } from './concert';

export default function* rootSaga() {
  yield all([concertSaga()]);
}
