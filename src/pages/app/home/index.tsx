import React from 'react';
import AutocompleteSearch from 'components/autocompleteSearch';
import MainContainer from 'components/mainContainer';

const Home: React.FC = () => {
	return (
		<div>
			Home
			<AutocompleteSearch />
			<MainContainer />
		</div>
	);
};

export default Home;
