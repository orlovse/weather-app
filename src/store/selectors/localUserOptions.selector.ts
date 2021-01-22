import { ApplicationState } from 'store/types';

export const currentCitySelector = (state: ApplicationState) => state.localUserOptions.currentCity;
export const favoritesSelector = (state: ApplicationState) => state.localUserOptions.favorites;
