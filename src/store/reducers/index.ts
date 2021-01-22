import { ILocalUserState, LocalUserActions } from './../types/localUserOptions.types';
import { combineReducers, Reducer } from 'redux';
import { History } from 'history';
// reducers
// import storeAReducer, { IStoreState, Action } from './storeA.reducer';
import { connectRouter, RouterState } from 'connected-react-router';
import localUserOptions from './localUserOptions.reducer';

export interface IRootReducer {
	// storeA: Reducer<IStoreState, LocalUserActions>;
	localUserOptions: Reducer<ILocalUserState, LocalUserActions>;
	router: RouterState;
}

const rootReducer = (history: History<unknown>): Reducer =>
	combineReducers({
		// storeA: storeAReducer,
		localUserOptions,
		router: connectRouter(history),
	});

export default rootReducer;
