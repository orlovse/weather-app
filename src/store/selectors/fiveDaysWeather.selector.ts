import { ApplicationState } from 'store/types';

export const fiveDaysWeatherSelector = (state: ApplicationState) => state.fiveDaysWeather.data;
