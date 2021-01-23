import {
	GET_CURRENT_WEATHER_REQUEST,
	SET_CURRENT_WEATHER_SUCCESS,
	SET_CURRENT_WEATHER_ERROR,
	SetCurrentWeatherErrorAction,
	SetCurrentWeatherSuccsessAction,
	GetCurrentWeatherAction,
} from './../types/currentWeather.types';

export const getCurrentWeather: GetCurrentWeatherAction = payload => ({
	type: GET_CURRENT_WEATHER_REQUEST,
	payload,
});

export const setCurrentWeather: SetCurrentWeatherSuccsessAction = payload => ({
	type: SET_CURRENT_WEATHER_SUCCESS,
	payload,
});

export const setCurrentWeatherError: SetCurrentWeatherErrorAction = error => ({
	type: SET_CURRENT_WEATHER_ERROR,
	error,
});
