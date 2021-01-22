import { GET_FIVE_DAYS_WEATHER_REQUEST } from './../types/fiveDaysWeather.types';
import type { AllEffect, ForkEffect } from '@redux-saga/core/effects';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { setFiveDaysWeather, setFiveDaysWeatherError } from './../actions/fiveDaysWeather.actions';
import { fiveDays } from '../../mockData';

function* handleFetch() {
	try {
		const data = fiveDays.DailyForecasts.map(item => ({
			date: item.Date,
			maxT: item.Temperature.Maximum.Value,
			minT: item.Temperature.Minimum.Value,
			icon: item.Day.Icon,
			text: item.Day.IconPhrase,
		}));
		yield put(setFiveDaysWeather({ data }));
	} catch (error) {
		yield put(setFiveDaysWeatherError(error));
	}
}

function* watchFetchRequest() {
	yield takeEvery(GET_FIVE_DAYS_WEATHER_REQUEST, handleFetch);
}

export default function* fiveDaysWeatherSaga(): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
	yield all([fork(watchFetchRequest)]);
}
