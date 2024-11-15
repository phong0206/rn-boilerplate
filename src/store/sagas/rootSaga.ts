import { all, fork } from 'redux-saga/effects';
import userInfoSaga from './user';

export default function* rootSaga() {
  yield all([fork(userInfoSaga)]);
}

export type RootState = ReturnType<typeof rootSaga>;
