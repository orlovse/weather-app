import * as types from 'store/types/storeA.types';
import type { SetInitialAction, SetSuccessAction, SetErrorAction } from 'store/types/storeA.types';

export const getMessage: SetInitialAction = () => ({
	type: types.SET_ACTION_REQUEST,
});

export const setMessage: SetSuccessAction = payload => ({
	type: types.SET_ACTION_SUCCESS,
	payload,
});

export const setMessageError: SetErrorAction = error => ({
	type: types.SET_ACTION_ERROR,
	error,
});
