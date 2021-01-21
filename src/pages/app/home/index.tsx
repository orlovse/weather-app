import React from 'react';
import AutocompleteSearch from 'components/autocompleteSearch';
import MainContainer from 'components/mainContainer';
import { GlassBox } from 'styles/sharedStyle';

const Home: React.FC = () => {
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

export default Home;
