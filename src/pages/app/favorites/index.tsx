import React, { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { ApplicationState } from 'store/types';
import { favoritesSelector } from 'store/selectors/localUserOptions.selector';
import { Grid } from '@material-ui/core';
import FavoriteCard from 'components/favoriteCard';

const connector = connect((state: ApplicationState) => ({
	favorites: favoritesSelector(state),
}));

type PropsFromRedux = ConnectedProps<typeof connector>;

export const Favorites: FC<PropsFromRedux> = ({ favorites }: PropsFromRedux) => {
	const favoritesList = Object.keys(favorites).map(key => (
		<Grid item xs={12} md={6} lg="auto" key={key}>
			<FavoriteCard currentKey={key} favoriteWeather={favorites[key]} />
		</Grid>
	));
	return <Grid container>{favoritesList}</Grid>;
};

export default connector(Favorites);
