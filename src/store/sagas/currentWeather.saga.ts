import { CurrentWeatherResponse, callApiCurrentWeather } from './api/index';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import type { AllEffect, ForkEffect } from '@redux-saga/core/effects';
import { toast } from 'react-toastify';
import { setCurrentWeather, setCurrentWeatherError } from './../actions/currentWeather.actions';
import { GET_CURRENT_WEATHER_REQUEST, IGetCurrentWeather } from './../types/currentWeather.types';
// import { currentWeather } from '../../mockData';

function* handleFetch(action: IGetCurrentWeather) {
	try {
		// const data = {
		// 	date: currentWeather[0].LocalObservationDateTime,
		// 	text: currentWeather[0].WeatherText,
		// 	icon: currentWeather[0].WeatherIcon,
		// 	metricT: currentWeather[0].Temperature.Metric.Value,
		// 	imperialT: currentWeather[0].Temperature.Imperial.Value,
		// };

		const response: CurrentWeatherResponse = yield call(callApiCurrentWeather, action.payload.cityId);
		const data = {
			date: response[0].LocalObservationDateTime,
			text: response[0].WeatherText,
			icon: response[0].WeatherIcon,
			metricT: response[0].Temperature.Metric.Value,
			imperialT: response[0].Temperature.Imperial.Value,
		};

		yield put(setCurrentWeather({ data }));
	} catch (error) {
		toast.error('Error loading current weather!', {
			position: 'top-right',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		yield put(setCurrentWeatherError(error));
	}
}

function* watchFetchRequest() {
	yield takeEvery(GET_CURRENT_WEATHER_REQUEST, handleFetch);
}

export default function* currentWeatherSaga(): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
	yield all([fork(watchFetchRequest)]);
}
