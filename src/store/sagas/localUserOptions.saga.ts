// import { removeFromFavorites } from './../actions/localUserOptions.actions';
// import { saveToLocalStorage, removeFromLocalStorage } from './../../utils/helpers';
import type { AllEffect, ForkEffect } from '@redux-saga/core/effects';
import {
	ADD_TO_FAVORITES,
	IAddToFavorites,
	REMOVE_FROM_FAVORITES,
	IRemoveFromFavorites,
} from './../types/localUserOptions.types';
import { all, fork, takeEvery } from 'redux-saga/effects';
import { toast } from 'react-toastify';
// import { addToFavorites } from 'store/actions/localUserOptions.actions';

function* handleAddToFavorites(action: IAddToFavorites) {
	console.log('1');
	// const { key, currentCityName, currentCountry, currentWeather } = action.payload;
	// saveToLocalStorage('favorites', {
	// 	[key]: { currentCityName, currentCountry, currentWeather },
	// });
	toast.success('City added to favorites!', {
		position: 'bottom-center',
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
	yield console.log('aba');
}

function* handleRemoveFromFavorites(action: IRemoveFromFavorites) {
	// removeFromLocalStorage(action.payload.key);
	// yield put(removeFromFavorites({ key: action.payload.key }));
	toast.warning('City removed from favorites!', {
		position: 'bottom-center',
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
	yield console.log('remove from favorites');
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
