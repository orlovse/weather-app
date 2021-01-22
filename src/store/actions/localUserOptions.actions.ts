import {
	ADD_TO_FAVORITES,
	AddToFavoritesAction,
	PayloadFavorite,
	RemoveFromFavoritesAction,
	REMOVE_FROM_FAVORITES,
	PayloadCurrentCity,
	SET_CURRENT_CITY,
	SWITCH_FAHRENHEIT,
	SetCurrentCityAction,
	SwitchFahrenheitAction,
} from './../types/localUserOptions.types';

export const addToFavorites: AddToFavoritesAction = (payload: PayloadFavorite) => ({
	type: ADD_TO_FAVORITES,
	payload,
});

export const removeFromFavorites: RemoveFromFavoritesAction = (payload: { key: string }) => ({
	type: REMOVE_FROM_FAVORITES,
	payload,
});

export const setCurrentCity: SetCurrentCityAction = (payload: PayloadCurrentCity) => ({
	type: SET_CURRENT_CITY,
	payload,
});

export const switchFahrenheit: SwitchFahrenheitAction = (payload: { isFahrenheit: boolean }) => ({
	type: SWITCH_FAHRENHEIT,
	payload,
});
