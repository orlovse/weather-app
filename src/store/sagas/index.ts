import { all, fork } from 'redux-saga/effects';
import messagesSaga from './storeA.saga';
import type { AllEffect, ForkEffect } from '@redux-saga/core/effects';

export default function* rootSaga(): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
	// add mode sagas to the array
	yield all([fork(messagesSaga)]);
}
