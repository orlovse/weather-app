import { ApplicationState } from 'store/types';
import { createSelector } from 'reselect';

export const currentCitySelector = (state: ApplicationState) => state.localUserOptions.currentCity;
export const favoritesSelector = (state: ApplicationState) => state.localUserOptions.favorites;

export const currentCityKeySelector = createSelector(currentCitySelector, currentCity => currentCity.key);