import { getFiveDaysWeather } from 'store/actions/fiveDaysWeather.actions';
import { getCurrentWeather } from 'store/actions/currentWeather.actions';
import {
	SWITCH_DARK,
	ISwitchDark,
	GET_LOCATION,
	ICurrentLocation,
	SET_CURRENT_CITY,
	ISetCurrentCity,
} from './../types/localUserOptions.types';
import { setCurrentLoaction } from './../actions/localUserOptions.actions';
// import { saveToLocalStorage, removeFromLocalStorage } from './../../utils/helpers';
import type { AllEffect, ForkEffect } from '@redux-saga/core/effects';
import {
	ADD_TO_FAVORITES,
	IAddToFavorites,
	REMOVE_FROM_FAVORITES,
	IRemoveFromFavorites,
} from './../types/localUserOptions.types';
import { all, fork, takeEvery, put, call } from 'redux-saga/effects';
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

function* handleSwitchDark(action: ISwitchDark) {
	yield console.log('switchdark');
}

const getUserLocation = () =>
	new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			location => resolve(location),
			error => reject(error)
		);
	});

interface ILocation {
	coords: {
		latitude: number;
		longitude: number;
	};
}

function* handleGetLocation(action: ICurrentLocation) {
	const location: ILocation = yield call(getUserLocation);
	if (location) {
		const latitude = location.coords.latitude.toString();
		const longitude = location.coords.longitude.toString();
		yield put(setCurrentLoaction({ latitude, longitude }));
	}
}

function* handleSetCurrentCity(action: ISetCurrentCity) {
	const cityId = action.payload.key;
	yield put(getCurrentWeather({ cityId }));
	yield put(getFiveDaysWeather({ cityId }));
}

function* watchAddToFavorites() {
	yield takeEvery(ADD_TO_FAVORITES, handleAddToFavorites);
}

function* watchRemoveFromFavorites() {
	yield takeEvery(REMOVE_FROM_FAVORITES, handleRemoveFromFavorites);
}

function* watchSwitchDark() {
	yield takeEvery(SWITCH_DARK, handleSwitchDark);
}

function* watchCurrentLocation() {
	yield takeEvery(GET_LOCATION, handleGetLocation);
}

function* watchSetCurrentCity() {
	yield takeEvery(SET_CURRENT_CITY, handleSetCurrentCity);
}

export function* addToFavoritesSaga(): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
	yield all([
		fork(watchAddToFavorites),
		fork(watchRemoveFromFavorites),
		fork(watchSwitchDark),
		fork(watchCurrentLocation),
		fork(watchSetCurrentCity),
	]);
}
