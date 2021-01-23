import { CurrentWeather } from './currentWeather.types';

export const SET_CURRENT_CITY = 'SET_CURRENT_CITY';
export const SWITCH_DARK = 'SWITCH_DARK';
export const SWITCH_FAHRENHEIT = 'SWITCH_FAHRENHEIT';
export const GET_LOCATION = 'GET_LOCATION';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export interface ILocalUserState {
	currentCity: ICurrentCity;
	favorites: IFavorites;
	isFahrenheit: boolean;
	isDark: boolean;
}

export interface ICurrentCity {
	key: string;
	name: string;
	country: string;
}

export interface IFavorites {
	[key: string]: Favorites;
}
export type Favorites = {
	currentCityName: string;
	currentCountry: string;
	currentWeather: CurrentWeather;
};

export type LocalUserActions = IAddToFavorites | IRemoveFromFavorites | ISetCurrentCity | ISwitchFahrenheit | ISwitchDark;

export type PayloadFavorite = {
	key: string;
	currentCityName: string;
	currentCountry: string;
	currentWeather: CurrentWeather;
};

export interface IAddToFavorites {
	type: typeof ADD_TO_FAVORITES;
	payload: PayloadFavorite;
}

export interface IRemoveFromFavorites {
	type: typeof REMOVE_FROM_FAVORITES;
	payload: { key: string };
}

export interface ISwitchFahrenheit {
	type: typeof SWITCH_FAHRENHEIT;
	payload: { isFahrenheit: boolean };
}

export interface ISwitchDark {
	type: typeof SWITCH_DARK;
	payload: { isDark: boolean };
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

export type SwitchFahrenheitAction = (payload: { isFahrenheit: boolean }) => ISwitchFahrenheit;

export type SwitchDarkAction = (payload: { isDark: boolean }) => ISwitchDark;
