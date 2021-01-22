import { removeFromFavorites } from './../actions/localUserOptions.actions';
// import { saveToLocalStorage, removeFromLocalStorage } from './../../utils/helpers';
import type { AllEffect, ForkEffect } from '@redux-saga/core/effects';
import {
	ADD_TO_FAVORITES,
	IAddToFavorites,
	REMOVE_FROM_FAVORITES,
	IRemoveFromFavorites,
} from './../types/localUserOptions.types';
import { all, fork, takeEvery, put } from 'redux-saga/effects';
// import { addToFavorites } from 'store/actions/localUserOptions.actions';

function* handleAddToFavorites(action: IAddToFavorites) {
	console.log('1');
	// const { key, currentCityName, currentCountry, currentWeather } = action.payload;
	// saveToLocalStorage('favorites', {
	// 	[key]: { currentCityName, currentCountry, currentWeather },
	// });
	yield console.log('aba');
}

function* handleRemoveFromFavorites(action: IRemoveFromFavorites) {
	// removeFromLocalStorage(action.payload.key);
	yield put(removeFromFavorites({ key: action.payload.key }));
}

function* watchAddToFavorites() {
	yield takeEvery(ADD_TO_FAVORITES, handleAddToFavorites);
}

function* watchRemoveFromFavorites() {
	yield takeEvery(REMOVE_FROM_FAVORITES, handleRemoveFromFavorites);
}

export function* addToFavoritesSaga(): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
	yield all([fork(watchAddToFavorites), fork(watchRemoveFromFavorites)]);
}
