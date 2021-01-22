import { CurrentWeatherActions } from './../types/currentWeather.types';
import { currentWeather } from './currentWeather.reducer';
import { ILocalUserState, LocalUserActions } from './../types/localUserOptions.types';
import { combineReducers, Reducer } from 'redux';
import { History } from 'history';
// reducers
// import storeAReducer, { IStoreState, Action } from './storeA.reducer';
import { connectRouter, RouterState } from 'connected-react-router';
import localUserOptions from './localUserOptions.reducer';
import { ICurrentWeatherState } from 'store/types/currentWeather.types';

export interface IRootReducer {
	// storeA: Reducer<IStoreState, LocalUserActions>;
	localUserOptions: Reducer<ILocalUserState, LocalUserActions>;
	currentWeather: Reducer<ICurrentWeatherState, CurrentWeatherActions>;
	router: RouterState;
}

const rootReducer = (history: History<unknown>): Reducer =>
	combineReducers({
		// storeA: storeAReducer,
		currentWeather,
		localUserOptions,
		router: connectRouter(history),
	});

export default rootReducer;
