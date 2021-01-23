import { FiveDaysResponse, callApiFiveDaysWeather } from './api/index';
import type { AllEffect, ForkEffect } from '@redux-saga/core/effects';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { setFiveDaysWeather, setFiveDaysWeatherError } from './../actions/fiveDaysWeather.actions';
import { GET_FIVE_DAYS_WEATHER_REQUEST, IGetFiveDaysWeather } from './../types/fiveDaysWeather.types';
// import { fiveDays } from '../../mockData';

function* handleFetch(action: IGetFiveDaysWeather) {
	try {
		// const data = fiveDays.DailyForecasts.map(item => ({
		// 	date: item.Date,
		// 	maxT: item.Temperature.Maximum.Value,
		// 	minT: item.Temperature.Minimum.Value,
		// 	icon: item.Day.Icon,
		// 	text: item.Day.IconPhrase,
		// }));

		const response: FiveDaysResponse = yield call(callApiFiveDaysWeather, action.payload.cityId);
		const data = response.DailyForecasts.map(item => ({
			date: item.Date,
			maxT: item.Temperature.Maximum.Value,
			minT: item.Temperature.Minimum.Value,
			icon: item.Day.Icon,
			text: item.Day.IconPhrase,
		}));

		yield put(setFiveDaysWeather({ data }));
	} catch (error) {
		yield put(setFiveDaysWeatherError(error));
		toast.error('Error loading weather!', {
			position: 'top-right',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	}
}

function* watchFetchRequest() {
	yield takeEvery(GET_FIVE_DAYS_WEATHER_REQUEST, handleFetch);
}

export default function* fiveDaysWeatherSaga(): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
	yield all([fork(watchFetchRequest)]);
}
