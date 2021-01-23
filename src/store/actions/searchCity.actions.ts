import {
	GetSearchCityAction,
	GET_SEARCH_CITY_REQUEST,
	SetSearchCitySuccessAction,
	SET_SEARCH_CITY_SUCCESS,
	SetSearchCityErrorAction,
	SET_SEARCH_CITY_ERROR,
} from './../types/searchCity.types';

export const getSearchCity: GetSearchCityAction = payload => ({
	type: GET_SEARCH_CITY_REQUEST,
	payload,
});

export const setSearchCity: SetSearchCitySuccessAction = payload => ({
	type: SET_SEARCH_CITY_SUCCESS,
	payload,
});

export const setSearchCityError: SetSearchCityErrorAction = error => ({
	type: SET_SEARCH_CITY_ERROR,
	error,
});
