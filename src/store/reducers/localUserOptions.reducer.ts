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
			return {
				...state,
				favorites: {
					...state.favorites,
					[action.payload.key]: {
						currentCityName: action.payload.currentCityName,
						currentCountry: action.payload.currentCountry,
						currentWeather: action.payload.currentWeather,
					},
				},
			};
		case REMOVE_FROM_FAVORITES:
			// if(Object.keys(state.favorites).length > 1) {
			// const { ...fields } = state.favorites;
			// const fields = {...state.favorites}

			// }
			// console.log('fields', fields);

			if (Object.keys(state.favorites).length > 0) {
				const fields = { ...state.favorites };
				delete fields[action.payload.key];
				return {
					...state,
					favorites: { ...fields },
				};
			}
			return state;

		default:
			return state;
	}
};
export default localUserOptions;
