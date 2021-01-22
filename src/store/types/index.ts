import { ILocalUserState, LocalUserActions } from './localUserOptions.types';
import { RouterState } from 'connected-react-router';
// import type { IStoreState, Action } from './storeA.types';

// The top-level state object
export interface ApplicationState {
	localUserOptions: ILocalUserState;
	// storeA: IStoreState;
	router: RouterState;
}
// chain with | add the rest actions types
export type AppAction = LocalUserActions;
