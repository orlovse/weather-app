import {
	ILocalUserState,
	LocalUserActions,
	ADD_TO_FAVORITES,
	REMOVE_FROM_FAVORITES,
	SET_CURRENT_CITY,
} from './../types/localUserOptions.types';
const initialState: ILocalUserState = {
	favorites: {},
	currentCity: { key: '215854', name: 'Tel Aviv', country: 'Israel' },
};

const localUserOptions = (state = initialState, action: LocalUserActions): ILocalUserState => {
	switch (action.type) {
		case SET_CURRENT_CITY:
			return {
				...state,
				currentCity: action.payload,
			};
		case ADD_TO_FAVORITES:
			const { key, currentCityName, currentCountry, currentWeather } = action.payload;
			return {
				...state,
				favorites: {
					...state.favorites,
					[key]: { currentCityName, currentCountry, currentWeather },
				},
			};
		case REMOVE_FROM_FAVORITES:
			// if(Object.keys(state.favorites).length > 1) {
			const { ...fields } = state.favorites;
			// const fields = {...state.favorites}
			delete fields[action.payload.key];
			// }

			return {
				...state,
				favorites: fields,
			};

		default:
			return state;
	}
};
export default localUserOptions;
