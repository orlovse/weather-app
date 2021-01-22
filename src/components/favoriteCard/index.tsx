import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { Favorites } from 'store/types/localUserOptions.types';
import { StyledFavoriteCard } from 'styles/sharedStyle';
import { setCurrentCity } from 'store/actions/localUserOptions.actions';
import { connect, ConnectedProps } from 'react-redux';
import { getIcon } from 'utils/geyIcons';
import { Link } from 'react-router-dom';
import AnimatedHeart from 'components/animatedHeart';
import { ApplicationState } from 'store/types';
import { isFahrenheitSelector } from 'store/selectors/localUserOptions.selector';

const connector = connect(
	(state: ApplicationState) => ({
		isFahrenheit: isFahrenheitSelector(state),
	}),
	{ setCurrentCity }
);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
	currentKey: string;
	favoriteWeather: Favorites;
};

const FavoriteCard: FC<Props> = ({ isFahrenheit, currentKey, favoriteWeather, setCurrentCity }: Props) => {
	const celsius = favoriteWeather.currentWeather.metricT;
	const fahrenheit = favoriteWeather.currentWeather.imperialT;
	const cityName = favoriteWeather.currentCityName;
	const countryName = favoriteWeather.currentCountry;
	const weatherText = favoriteWeather.currentWeather.text;

	const setAsCurrentCity = () => {
		// loadAllWeather(currentKey);
		setCurrentCity({ key: currentKey, name: cityName, country: countryName });
	};

	const currentTemperature = isFahrenheit ? fahrenheit.toString() + ' F' : Math.round(celsius).toString() + ' \u00b0C';

	const iconSrc = getIcon(favoriteWeather.currentWeather.icon);
	const img = iconSrc ? (
		<img width="100px" src={iconSrc} alt="weather-icon"></img>
	) : (
		<Skeleton variant="circle" width={80} height={80} />
	);

	return (
		<StyledFavoriteCard>
			<Grid container direction="column" alignItems="center">
				{img}

				<Link to="/" onClick={setAsCurrentCity}>
					<h2>{cityName || <Skeleton width={120} />}</h2>
				</Link>

				<div>{countryName || <Skeleton width={100} />}</div>
				<div>{weatherText || <Skeleton width={100} />}</div>
				<h2>{currentTemperature || <Skeleton width={100} />}</h2>

				<AnimatedHeart currentCityKey={currentKey} />
			</Grid>
		</StyledFavoriteCard>
	);
};

export default connector(FavoriteCard);
