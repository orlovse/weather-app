import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { currentWeather } from 'mockData';
import { getIcon } from 'utils/geyIcons';
import { StyledWeatherCard } from 'styles/sharedStyle';
import { addToFavorites } from 'store/actions/localUserOptions.actions';
import { connect } from 'react-redux';
// import { celsiusToFahrenheit } from 'utils/helpers';
import { AddToFavoritesAction } from 'store/types/localUserOptions.types';

interface IProps {
	addToFavorites: AddToFavoritesAction;
}

const WeatherCard: FC<IProps> = ({ addToFavorites }: IProps) => {
	const isFahrenheit = false;
	const phrase = 'Sunny';
	const weekday = 'Sunday';
	// const max = isFahrenheit ? celsiusToFahrenheit(maximum) : Math.round(maximum);
	// const min = isFahrenheit ? celsiusToFahrenheit(minimum) : Math.round(minimum);
	const max = 20;
	const min = 10;
	const mark = isFahrenheit ? 'F' : '\u00b0C';
	const stringTemperature = `${max} ${mark} / ${min} ${mark}`;
	const iconSrc = getIcon(currentWeather[0].WeatherIcon);
	const img = iconSrc ? (
		<img width="100px" src={iconSrc} alt="weather-icon"></img>
	) : (
		<Skeleton variant="circle" width={80} height={80} />
	);

	const handleClick = () => {
		addToFavorites({ key: '1', currentCityName: 'telaviv', currentCountry: 'israel', currentWeather: { ab: 'sbsbs' } });
	};
	return (
		<StyledWeatherCard>
			<Grid container direction="column" alignItems="center">
				{img}
				<div>{weekday || <Skeleton width={120} />}</div>
				<div>{phrase || <Skeleton width={120} />}</div>
				<div>{stringTemperature || <Skeleton width={120} />}</div>
				<button onClick={handleClick}>+++</button>
			</Grid>
		</StyledWeatherCard>
	);
};

export default connect(null, { addToFavorites })(WeatherCard);
