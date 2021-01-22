import { ILocalUserState, LocalUserActions } from './localUserOptions.types';
import { RouterState } from 'connected-react-router';
import { ICurrentWeatherState, CurrentWeatherActions } from './currentWeather.types';
import { IFiveDaysWeatherState, FiveDaysActions } from './fiveDaysWeather.types';
// import type { IStoreState, Action } from './storeA.types';

// The top-level state object
export interface ApplicationState {
	localUserOptions: ILocalUserState;
	currentWeather: ICurrentWeatherState;
	fiveDaysWeather: IFiveDaysWeatherState;
	// storeA: IStoreState;
	router: RouterState;
}
// chain with | add the rest actions types
export type AppAction = LocalUserActions | CurrentWeatherActions | FiveDaysActions;
