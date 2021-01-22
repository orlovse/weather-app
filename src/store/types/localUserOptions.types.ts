export const SET_CURRENT_CITY = 'SET_CURRENT_CITY';
export const SWITCH_DARK = 'SWITCH_DARK';
export const SWITCH_FAHRENHEIT = 'SWITCH_FAHRENHEIT';
export const GET_LOCATION = 'GET_LOCATION';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export interface ILocalUserState {
	currentCity: {
		key: string;
		name: string;
		country: string;
	};
	favorites: IFavorites;
}

interface IFavorites {
	[key: string]: { currentCityName: string; currentCountry: string; currentWeather: bbb };
}

type bbb = { ab: string };

export type LocalUserActions = IAddToFavorites | IRemoveFromFavorites | ISetCurrentCity;

export type PayloadFavorite = { key: string; currentCityName: string; currentCountry: string; currentWeather: bbb };

export interface IAddToFavorites {
	type: typeof ADD_TO_FAVORITES;
	payload: PayloadFavorite;
}

export interface IRemoveFromFavorites {
	type: typeof REMOVE_FROM_FAVORITES;
	payload: { key: string };
}

export type PayloadCurrentCity = {
	key: string;
	name: string;
	country: string;
};
export interface ISetCurrentCity {
	type: typeof SET_CURRENT_CITY;
	payload: PayloadCurrentCity;
}

export type AddToFavoritesAction = (payload: PayloadFavorite) => IAddToFavorites;

export type RemoveFromFavoritesAction = (payload: { key: string }) => IRemoveFromFavorites;

export type SetCurrentCityAction = (payload: PayloadCurrentCity) => ISetCurrentCity;
