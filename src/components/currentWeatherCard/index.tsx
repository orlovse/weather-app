import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { getIcon } from 'utils/geyIcons';
import { currentWeather, searchCity } from 'mockData';

const CurrentWeatherCard: FC = () => {
	const iconSrc = getIcon(currentWeather[0].WeatherIcon);
	const img = iconSrc ? (
		<img width="180px" src={iconSrc} alt="weather-icon"></img>
	) : (
		<Skeleton variant="circle" width={100} height={100} />
	);
	return (
		<Box>
			<div>{img}</div>
			<div>
				<div>
					<h2>{searchCity[0].LocalizedName || <Skeleton width={120} />}</h2>
					<h5>{searchCity[0].Country.LocalizedName || <Skeleton width={120} />} </h5>
				</div>
				<h3>{currentWeather[0].Temperature.Metric.Value || <Skeleton width={60} />}</h3>
			</div>
		</Box>
	);
};

export default CurrentWeatherCard;
