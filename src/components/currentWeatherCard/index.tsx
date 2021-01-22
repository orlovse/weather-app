import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { getIcon } from 'utils/geyIcons';
import { connect, ConnectedProps } from 'react-redux';
import { ApplicationState } from 'store/types';
import { currentWeatherSelector } from 'store/selectors/currentWeather.selector';
import { currentCitySelector } from 'store/selectors/localUserOptions.selector';

const connector = connect((state: ApplicationState) => ({
	currentWeather: currentWeatherSelector(state),
	currentCity: currentCitySelector(state),
}));

type PropsFromRedux = ConnectedProps<typeof connector>;

const CurrentWeatherCard: FC<PropsFromRedux> = ({ currentWeather, currentCity }: PropsFromRedux) => {
	const isFahrenheit = false;
	let currentTemperature = null;
	let img = <Skeleton variant="circle" width={100} height={100} />;
	if (currentWeather) {
		currentTemperature = isFahrenheit
			? currentWeather.imperialT.toString() + ' F'
			: Math.round(currentWeather.metricT).toString() + ' \u00b0C';
		const iconSrc = getIcon(currentWeather.icon);
		img = iconSrc ? (
			<img width="180px" src={iconSrc} alt="weather-icon"></img>
		) : (
			<Skeleton variant="circle" width={100} height={100} />
		);
	}

	return (
		<Box>
			<div>{img}</div>
			<div>
				<div>
					<h2>{currentCity.name || <Skeleton width={120} />}</h2>
					<h5>{currentCity.country || <Skeleton width={120} />} </h5>
				</div>
				<h3>{currentTemperature || <Skeleton width={60} />}</h3>
			</div>
		</Box>
	);
};

export default connector(CurrentWeatherCard);
