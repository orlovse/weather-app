import React, { useEffect, FC } from 'react';
import AutocompleteSearch from 'components/autocompleteSearch';
import MainContainer from 'components/mainContainer';
import { GlassBox } from 'styles/sharedStyle';
import { connect, ConnectedProps } from 'react-redux';
import { getCurrentWeather } from 'store/actions/currentWeather.actions';
import { getFiveDaysWeather } from 'store/actions/fiveDaysWeather.actions';
import { getCurrentLocation } from 'store/actions/localUserOptions.actions';
import { ApplicationState } from 'store/types';
import { currentCityKeySelector } from 'store/selectors/localUserOptions.selector';

const connector = connect(
	(state: ApplicationState) => ({
		cityKey: currentCityKeySelector(state),
	}),
	{ getCurrentWeather, getFiveDaysWeather, getCurrentLocation }
);
type PropsFromRedux = ConnectedProps<typeof connector>;

const Home: FC<PropsFromRedux> = ({ cityKey, getCurrentWeather, getFiveDaysWeather, getCurrentLocation }: PropsFromRedux) => {
	useEffect(() => {
		getCurrentWeather({ cityId: cityKey.toString() });
		getFiveDaysWeather({ cityId: cityKey.toString() });
		getCurrentLocation();
	}, []);
	return (
		<div>
			<GlassBox>
				<AutocompleteSearch />
			</GlassBox>
			<GlassBox>
				<MainContainer />
			</GlassBox>
		</div>
	);
};

export default connector(Home);
