export const SET_ACTION_REQUEST = 'GET_ACTION_REQUEST' as const;
export const SET_ACTION_SUCCESS = 'SET_ACTION_SUCCESS' as const;
export const SET_ACTION_ERROR = 'SET_ACTION_ERROR' as const;

export interface IStoreState {
	pending: boolean;
	error: string | null;
	message: string;
	timestamp: number;
}

export type Action = ISetActionA | ISetSuccess | ISetActionError;

// SET INITIAL ACTION
interface ISetActionA {
	type: typeof SET_ACTION_REQUEST;
}
export type SetInitialAction = () => ISetActionA;

// SET ACTION SUCCESS
type PayloadSuccess = {
	message: string;
	timestamp: number;
};
interface ISetSuccess {
	type: typeof SET_ACTION_SUCCESS;
	payload: PayloadSuccess;
}
export type SetSuccessAction = (payload: PayloadSuccess) => ISetSuccess;

// SET ACTION FAILED
interface ISetActionError {
	type: typeof SET_ACTION_ERROR;
	error: string;
}
export type SetErrorAction = (error: string) => ISetActionError;
