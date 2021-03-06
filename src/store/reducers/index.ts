import { SearchCityActions } from './../types/searchCity.types';
import { searchCity } from './searchCity.reducer';
import { FiveDaysActions } from './../types/fiveDaysWeather.types';
import { fiveDaysWeather } from './fiveDaysWeather.reducer';
import { CurrentWeatherActions } from './../types/currentWeather.types';
import { currentWeather } from './currentWeather.reducer';
import { ILocalUserState, LocalUserActions } from './../types/localUserOptions.types';
import { combineReducers, Reducer } from 'redux';
import { History } from 'history';

import { connectRouter, RouterState } from 'connected-react-router';
import localUserOptions from './localUserOptions.reducer';
import { ICurrentWeatherState } from 'store/types/currentWeather.types';
import { IFiveDaysWeatherState } from 'store/types/fiveDaysWeather.types';
import { ISearchCityState } from 'store/types/searchCity.types';

export interface IRootReducer {
	localUserOptions: Reducer<ILocalUserState, LocalUserActions>;
	currentWeather: Reducer<ICurrentWeatherState, CurrentWeatherActions>;
	fiveDaysWeather: Reducer<IFiveDaysWeatherState, FiveDaysActions>;
	searchCity: Reducer<ISearchCityState, SearchCityActions>;
	router: RouterState;
}

const rootReducer = (history: History<unknown>): Reducer =>
	combineReducers({
		currentWeather,
		fiveDaysWeather,
		localUserOptions,
		searchCity,
		router: connectRouter(history),
	});

export default rootReducer;
