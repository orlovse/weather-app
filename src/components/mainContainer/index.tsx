import React, { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Grid, Box } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

import CurrentWeatherCard from 'components/currentWeatherCard';
import WeatherCard from 'components/weatherCard';
import AnimatedHeart from 'components/animatedHeart';

import { ApplicationState } from 'store/types';
import { currentCityKeySelector } from 'store/selectors/localUserOptions.selector';
import { currentWeatherSelector } from 'store/selectors/currentWeather.selector';
import { fiveDaysWeatherSelector } from 'store/selectors/fiveDaysWeather.selector';

const connector = connect((state: ApplicationState) => ({
	currentCityKey: currentCityKeySelector(state),
	currentWeather: currentWeatherSelector(state),
	fiveDaysWeather: fiveDaysWeatherSelector(state),
}));

type PropsFromRedux = ConnectedProps<typeof connector>;

const MainContainer: FC<PropsFromRedux> = ({ currentCityKey, currentWeather, fiveDaysWeather }: PropsFromRedux) => {
	const cardsList =
		fiveDaysWeather && fiveDaysWeather.length > 1
			? fiveDaysWeather.map(weatherData => (
					<Grid item xs={12} md={6} lg="auto" key={weatherData.date}>
						<WeatherCard weatherData={weatherData} />
					</Grid>
			  ))
			: [1, 2, 3, 4, 5].map(item => (
					<Grid item xs={12} md={6} lg="auto" key={item}>
						<WeatherCard />
					</Grid>
			  ));
	return (
		<Box p={2}>
			<Grid container direction="row" justify="space-between" alignItems="center">
				<Grid item xs={12} md="auto">
					<CurrentWeatherCard />
				</Grid>
				<Grid item xs={12} md="auto" className="flex-center">
					<AnimatedHeart currentCityKey={currentCityKey} />
				</Grid>
			</Grid>
			<h1>{currentWeather?.text || <Skeleton width={150} style={{ display: 'inline-block' }} />}</h1>
			<Grid container justify="space-between">
				{cardsList}
			</Grid>
		</Box>
	);
};

export default connector(MainContainer);
