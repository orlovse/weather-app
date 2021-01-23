import { callApiSearchCity, SearchCityResponse } from './api/index';
import { setSearchCityError, setSearchCity } from './../actions/searchCity.actions';
import { toast } from 'react-toastify';
import { all, call, fork, takeEvery, put } from 'redux-saga/effects';
import type { AllEffect, ForkEffect } from '@redux-saga/core/effects';

import { GET_SEARCH_CITY_REQUEST, IGetSearchCity } from './../types/searchCity.types';

function* handleFetch(action: IGetSearchCity) {
	try {
		const data: SearchCityResponse = yield call(callApiSearchCity, action.payload.city);
		yield put(setSearchCity({ data }));
	} catch (error) {
		toast.error('Error loading city!', {
			position: 'top-right',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		yield put(setSearchCityError(error));
	}
}

function* watchFetchRequest() {
	yield takeEvery(GET_SEARCH_CITY_REQUEST, handleFetch);
}

export default function* searchCitySaga(): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
	yield all([fork(watchFetchRequest)]);
}
