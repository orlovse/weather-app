export const GET_FIVE_DAYS_WEATHER_REQUEST = 'GET_FIVE_DAYS_WEATHER_REQUEST';
export const SET_FIVE_DAYS_WEATHER_SUCCESS = 'SET_FIVE_DAYS_WEATHER_SUCCESS';
export const SET_FIVE_DAYS_WEATHER_ERROR = 'SET_FIVE_DAYS_WEATHER_ERROR';

export interface IFiveDaysWeatherState {
	pending: boolean;
	error: string | null;
	data: FiveDaysWeather[] | null;
}

export type FiveDaysWeather = {
	date: string;
	maxT: number;
	minT: number;
	icon: number;
	text: string;
};

export interface IGetFiveDaysWeather {
	type: typeof GET_FIVE_DAYS_WEATHER_REQUEST;
	payload: { cityId: string };
}

export type GetFiveDaysWeatherAction = (payload: { cityId: string }) => IGetFiveDaysWeather;

type PayloadSuccess = {
	data: FiveDaysWeather[];
};

interface ISetFiveDaysWeatherSuccess {
	type: typeof SET_FIVE_DAYS_WEATHER_SUCCESS;
	payload: PayloadSuccess;
}

export type SetFiveDaysWeatherSuccessAction = (payload: PayloadSuccess) => ISetFiveDaysWeatherSuccess;

interface ISetFiveDaysWeatherError {
	type: typeof SET_FIVE_DAYS_WEATHER_ERROR;
	error: string;
}

export type SetFiveDaysWeatherErrorAction = (error: string) => ISetFiveDaysWeatherError;

export type FiveDaysActions = IGetFiveDaysWeather | ISetFiveDaysWeatherSuccess | ISetFiveDaysWeatherError;
