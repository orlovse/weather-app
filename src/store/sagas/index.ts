import { all, fork } from 'redux-saga/effects';
import type { AllEffect, ForkEffect } from '@redux-saga/core/effects';
import { addToFavoritesSaga } from './localUserOptions.saga';
import currentWeatherSaga from './currentWeather.saga';
import fiveDaysWeatherSaga from './fiveDaysWeather.saga';

export default function* rootSaga(): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
	// add mode sagas to the array
	yield all([fork(addToFavoritesSaga), fork(currentWeatherSaga), fork(fiveDaysWeatherSaga)]);
}
