import React, { FC } from 'react';
import { Grid, Box } from '@material-ui/core';
import CurrentWeatherCard from 'components/currentWeatherCard';
import { fiveDays } from 'mockData';
import WeatherCard from 'components/weatherCard';
import AnimatedHeart from 'components/animatedHeart';
import { connect, ConnectedProps } from 'react-redux';
import { ApplicationState } from 'store/types';
import { currentCityKeySelector } from 'store/selectors/localUserOptions.selector';

const connector = connect((state: ApplicationState) => ({
	currentCityKey: currentCityKeySelector(state),
}));

type PropsFromRedux = ConnectedProps<typeof connector>;

const MainContainer: FC<PropsFromRedux> = ({ currentCityKey }: PropsFromRedux) => {
	const cardsList =
		fiveDays.DailyForecasts.length > 1
			? fiveDays.DailyForecasts.map(weatherData => (
					<Grid item xs={12} md={6} lg="auto" key={weatherData.Date}>
						<WeatherCard />
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
			<h2 style={{ fontSize: '3rem', margin: '0' }}>{/* {WeatherText} */}</h2>
			<Grid container justify="space-between">
				{cardsList}
			</Grid>
		</Box>
	);
};

export default connector(MainContainer);
