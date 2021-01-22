import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
// import { currentCitySelector } from 'store/selectors/localUserOptions.selector';
import { ApplicationState } from 'store/types';
import { currentCitySelector, favoritesSelector } from 'store/selectors/localUserOptions.selector';
import { addToFavorites, removeFromFavorites } from 'store/actions/localUserOptions.actions';
import { StyledAnimatedHeart } from 'styles/sharedStyle';
import { currentWeatherSelector } from 'store/selectors/currentWeather.selector';

const connector = connect(
	(state: ApplicationState) => ({
		currentCity: currentCitySelector(state),
		favorites: favoritesSelector(state),
		currentWeather: currentWeatherSelector(state),
	}),
	{ addToFavorites, removeFromFavorites }
);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
	currentCityKey: string;
};

const AnimatedHeart = ({
	currentCityKey,
	currentCity,
	currentWeather,
	favorites,
	addToFavorites,
	removeFromFavorites,
}: Props) => {
	const { name, country } = currentCity;
	const isFavoriteCity = !!favorites[currentCityKey];
	const handleClick = () => {
		if (isFavoriteCity) {
			removeFromFavorites({ key: currentCityKey });
		} else {
			if (currentWeather) {
				addToFavorites({ key: currentCityKey, currentCityName: name, currentCountry: country, currentWeather });
			}
		}
	};
	return <StyledAnimatedHeart isActive={isFavoriteCity} onClick={handleClick} />;
};

export default connector(AnimatedHeart);
