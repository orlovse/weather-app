import { ApplicationState } from 'store/types';

export const currentWeatherSelector = (state: ApplicationState) => state.currentWeather.data;
