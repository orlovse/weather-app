import { IFavorites, ICurrentCity } from './../types/localUserOptions.types';
import { ApplicationState } from 'store/types';
import { createSelector } from 'reselect';

export const currentCitySelector = (state: ApplicationState): ICurrentCity => state.localUserOptions.currentCity;
export const favoritesSelector = (state: ApplicationState): IFavorites => state.localUserOptions.favorites;
export const isFahrenheitSelector = (state: ApplicationState): boolean => state.localUserOptions.isFahrenheit;
export const isDarkSelector = (state: ApplicationState): boolean => state.localUserOptions.isDark;

export const currentCityKeySelector = createSelector(currentCitySelector, currentCity => currentCity.key);
