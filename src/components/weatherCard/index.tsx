import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { getIcon } from 'utils/geyIcons';
import { StyledWeatherCard } from 'styles/sharedStyle';
// import { connect } from 'react-redux';
import { FiveDaysWeather } from 'store/types/fiveDaysWeather.types';
import { celsiusToFahrenheit } from 'utils/helpers';

interface Props {
	weatherData?: FiveDaysWeather;
}
const WeatherCard: FC<Props> = ({ weatherData }: Props) => {
	const isFahrenheit = false;
	let phrase = null;
	let weekday = null;
	let stringTemperature = null;
	let img = <Skeleton variant="circle" width={80} height={80} />;
	if (weatherData) {
		phrase = weatherData.text;
		weekday = new Date(weatherData.date).toLocaleDateString('en-US', {
			weekday: 'long',
		});
		const max = isFahrenheit ? celsiusToFahrenheit(weatherData.maxT) : Math.round(weatherData.maxT);
		const min = isFahrenheit ? celsiusToFahrenheit(weatherData.minT) : Math.round(weatherData.minT);

		const mark = isFahrenheit ? 'F' : '\u00b0C';
		stringTemperature = `${max} ${mark} / ${min} ${mark}`;

		const iconSrc = getIcon(weatherData.icon);
		img = iconSrc ? (
			<img width="100px" src={iconSrc} alt="weather-icon"></img>
		) : (
			<Skeleton variant="circle" width={80} height={80} />
		);
	}

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
