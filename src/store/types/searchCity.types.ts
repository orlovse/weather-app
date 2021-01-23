export const GET_SEARCH_CITY_REQUEST = 'GET_SEARCH_CITY_REQUEST';
export const SET_SEARCH_CITY_SUCCESS = 'SET_SEARCH_CITY_SUCCESS';
export const SET_SEARCH_CITY_ERROR = 'SET_SEARCH_CITY_ERROR';

export interface ISearchCityState {
	pending: boolean;
	error: string | null;
	data: SearchCity | null;
}

export type SearchCity = {
	Key: string;
	LocalizedName: string;
	Country: {
		ID: string;
		LocalizedName: string;
	};
	AdministrativeArea: {
		ID: string;
		LocalizedName: string;
	};
}[];

export interface IGetSearchCity {
	type: typeof GET_SEARCH_CITY_REQUEST;
	payload: { city: string };
}

export type GetSearchCityAction = (payload: { city: string }) => IGetSearchCity;

type PayloadSuccess = {
	data: SearchCity;
};

interface ISetSearchCitySuccess {
	type: typeof SET_SEARCH_CITY_SUCCESS;
	payload: PayloadSuccess;
}

export type SetSearchCitySuccessAction = (payload: PayloadSuccess) => ISetSearchCitySuccess;

export interface ISetSearchCityError {
	type: typeof SET_SEARCH_CITY_ERROR;
	error: string;
}

export type SetSearchCityErrorAction = (error: string) => ISetSearchCityError;

export type SearchCityActions = ISetSearchCityError | ISetSearchCitySuccess | IGetSearchCity;
