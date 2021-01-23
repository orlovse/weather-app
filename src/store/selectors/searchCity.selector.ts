import { SearchCity } from './../types/searchCity.types';
import { ApplicationState } from 'store/types';

export const searchCitySelector = (state: ApplicationState): SearchCity | null => state.searchCity.data;
