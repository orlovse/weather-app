import React, { useEffect, FC } from 'react';
import AutocompleteSearch from 'components/autocompleteSearch';
import MainContainer from 'components/mainContainer';
import { GlassBox } from 'styles/sharedStyle';
import { connect, ConnectedProps } from 'react-redux';
import { getCurrentWeather } from 'store/actions/currentWeather.actions';

const connector = connect(null, { getCurrentWeather });
type PropsFromRedux = ConnectedProps<typeof connector>;

const Home: FC<PropsFromRedux> = ({ getCurrentWeather }: PropsFromRedux) => {
	useEffect(() => {
		getCurrentWeather();
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
