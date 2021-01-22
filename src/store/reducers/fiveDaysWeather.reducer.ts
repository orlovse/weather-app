import {
	IFiveDaysWeatherState,
	FiveDaysActions,
	GET_FIVE_DAYS_WEATHER_REQUEST,
	SET_FIVE_DAYS_WEATHER_SUCCESS,
	SET_FIVE_DAYS_WEATHER_ERROR,
} from './../types/fiveDaysWeather.types';

const initialState: IFiveDaysWeatherState = {
	pending: false,
	error: null,
	data: null,
};

export const fiveDaysWeather = (state = initialState, action: FiveDaysActions): IFiveDaysWeatherState => {
	switch (action.type) {
		case GET_FIVE_DAYS_WEATHER_REQUEST:
			return {
				...state,
				pending: true,
			};
		case SET_FIVE_DAYS_WEATHER_SUCCESS:
			return {
				...state,
				data: action.payload.data,
			};
		case SET_FIVE_DAYS_WEATHER_ERROR:
			return {
				...state,
				error: action.error,
			};
		default:
			return state;
	}
};
