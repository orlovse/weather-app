import {
	CurrentWeatherActions,
	ICurrentWeatherState,
	GET_CURRENT_WEATHER_REQUEST,
	SET_CURRENT_WEATHER_SUCCESS,
	SET_CURRENT_WEATHER_ERROR,
} from './../types/currentWeather.types';

const initialState: ICurrentWeatherState = {
	pending: false,
	error: null,
	data: null,
};

export const currentWeather = (state = initialState, action: CurrentWeatherActions): ICurrentWeatherState => {
	switch (action.type) {
		case GET_CURRENT_WEATHER_REQUEST:
			return {
				...state,
				pending: true,
			};
		case SET_CURRENT_WEATHER_SUCCESS:
			return {
				...state,
				data: action.payload.data,
			};
		case SET_CURRENT_WEATHER_ERROR:
			return {
				...state,
				error: action.error,
			};

		default:
			return state;
	}
};
