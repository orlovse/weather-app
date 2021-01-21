import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { currentWeather } from 'mockData';
import { getIcon } from 'utils/geyIcons';
import { StyledWeatherCard } from 'styles/sharedStyle';
// import { celsiusToFahrenheit } from 'utils/helpers';

const WeatherCard: FC = () => {
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
	return (
		<StyledWeatherCard>
			<Grid container direction="column" alignItems="center">
				{img}
				<div>{weekday || <Skeleton width={120} />}</div>
				<div>{phrase || <Skeleton width={120} />}</div>
				<div>{stringTemperature || <Skeleton width={120} />}</div>
			</Grid>
		</StyledWeatherCard>
	);
};

export default WeatherCard;
