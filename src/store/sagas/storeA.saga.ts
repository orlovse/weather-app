import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as types from 'store/types/storeA.types';
import * as actions from 'store/actions/storeA.actions';
import type { AllEffect, ForkEffect } from '@redux-saga/core/effects';

const callApi = (msg: string): Promise<string> | string => new Promise(resolve => setTimeout(() => resolve(msg), 1000));

function* handleFetch() {
	try {
		// To call async functions, use redux-saga's `call()`.
		const message = (yield call(callApi, 'some message')) as string;
		// on success/error dispatch an action to update state
		yield put(actions.setMessage({ message, timestamp: 263267362 }));
	} catch (err) {
		yield put(actions.setMessageError('some error'));
	}
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchFetchRequest() {
	yield takeEvery(types.SET_ACTION_REQUEST, handleFetch);
}

// Use `fork()` here to split our saga into multiple watchers.
// for more info visit https://redux-saga.js.org/docs/basics/DeclarativeEffects.html
export default function* messagesSaga(): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
	yield all([fork(watchFetchRequest)]);
}
