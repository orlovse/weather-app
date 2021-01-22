import {
	GetFiveDaysWeatherAction,
	GET_FIVE_DAYS_WEATHER_REQUEST,
	SetFiveDaysWeatherSuccessAction,
	SET_FIVE_DAYS_WEATHER_SUCCESS,
	SetFiveDaysWeatherErrorAction,
	SET_FIVE_DAYS_WEATHER_ERROR,
} from './../types/fiveDaysWeather.types';

export const getFiveDaysWeather: GetFiveDaysWeatherAction = () => ({
	type: GET_FIVE_DAYS_WEATHER_REQUEST,
});

export const setFiveDaysWeather: SetFiveDaysWeatherSuccessAction = payload => ({
	type: SET_FIVE_DAYS_WEATHER_SUCCESS,
	payload,
});

export const setFiveDaysWeatherError: SetFiveDaysWeatherErrorAction = error => ({
	type: SET_FIVE_DAYS_WEATHER_ERROR,
	error,
});
