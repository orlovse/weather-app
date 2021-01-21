import { IStoreState, Action, SET_ACTION_SUCCESS, SET_ACTION_REQUEST, SET_ACTION_ERROR } from 'store/types/storeA.types';

const initialState: IStoreState = {
	pending: false,
	error: null,
	message: 'first message',
	timestamp: 387438478,
};

function storeAReducer(state = initialState, action: Action): IStoreState {
	switch (action.type) {
		case SET_ACTION_REQUEST:
			return {
				...state,
				pending: true,
			};
		case SET_ACTION_SUCCESS:
			return {
				...state,
				timestamp: action.payload.timestamp,
				message: action.payload.message,
				// or ...action.payload
			};
		case SET_ACTION_ERROR:
			return {
				...state,
				error: action.error,
			};
		default:
			return state;
	}
}

export type { IStoreState, Action } from 'store/types/storeA.types';
export default storeAReducer;
