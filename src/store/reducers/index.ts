import { combineReducers, Reducer } from 'redux';
import { History } from 'history';
// reducers
import storeAReducer, { IStoreState, Action } from './storeA.reducer';
import { connectRouter, RouterState } from 'connected-react-router';

export interface IRootReducer {
	storeA: Reducer<IStoreState, Action>;
	router: RouterState;
}

const rootReducer = (history: History<unknown>): Reducer =>
	combineReducers({
		storeA: storeAReducer,
		router: connectRouter(history),
	});

export default rootReducer;
