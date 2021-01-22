export const GET_CURRENT_WEATHER_REQUEST = 'GET_CURRENT_WEATHER_REQUEST';
export const SET_CURRENT_WEATHER_SUCCESS = 'SET_CURRENT_WEATHER_SUCCESS';
export const SET_CURRENT_WEATHER_ERROR = 'SET_CURRENT_WEATHER_ERROR';

export interface ICurrentWeatherState {
	pending: boolean;
	error: string | null;
	data: CurrentWeather | null;
}

type CurrentWeather = {
	date: string;
	text: string;
	icon: number;
	metricT: number;
	imperialT: number;
};

interface IGetCurrentWeather {
	type: typeof GET_CURRENT_WEATHER_REQUEST;
}

export type GetCurrentWeatherAction = () => IGetCurrentWeather;

type PayloadSuccess = {
	data: CurrentWeather;
};

interface ISetCurrentWeatherSuccsess {
	type: typeof SET_CURRENT_WEATHER_SUCCESS;
	payload: PayloadSuccess;
}

export type SetCurrentWeatherSuccsessAction = (payload: PayloadSuccess) => ISetCurrentWeatherSuccsess;

interface ISetCurrentWeatherError {
	type: typeof SET_CURRENT_WEATHER_ERROR;
	error: string;
}

export type SetCurrentWeatherErrorAction = (error: string) => ISetCurrentWeatherError;

export type CurrentWeatherActions = IGetCurrentWeather | ISetCurrentWeatherSuccsess | ISetCurrentWeatherError;
