import {
	SearchCityActions,
	ISearchCityState,
	GET_SEARCH_CITY_REQUEST,
	SET_SEARCH_CITY_SUCCESS,
	SET_SEARCH_CITY_ERROR,
} from './../types/searchCity.types';

const initialState: ISearchCityState = {
	pending: false,
	error: null,
	data: null,
};

export const searchCity = (state = initialState, action: SearchCityActions): ISearchCityState => {
	switch (action.type) {
		case GET_SEARCH_CITY_REQUEST:
			return {
				...state,
				pending: true,
			};
		case SET_SEARCH_CITY_SUCCESS:
			return {
				...state,
				data: action.payload.data,
			};
		case SET_SEARCH_CITY_ERROR:
			return {
				...state,
				error: action.error,
			};
		default:
			return state;
	}
};
