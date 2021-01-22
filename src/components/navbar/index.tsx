import React, { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppBar, Button, Grid, Toolbar, IconButton } from '@material-ui/core';

import { isFahrenheitSelector } from 'store/selectors/localUserOptions.selector';
import { ApplicationState } from 'store/types';
import { switchFahrenheit } from 'store/actions/localUserOptions.actions';

import celsiusIcon from '../../resources/svg/celsius.svg';
import fahrenheitIcon from '../../resources/svg/fahrenheit.svg';

const connector = connect(
	(state: ApplicationState) => ({
		isFahrenheit: isFahrenheitSelector(state),
	}),
	{ switchFahrenheit }
);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Navbar: FC<PropsFromRedux> = ({ isFahrenheit, switchFahrenheit }: PropsFromRedux) => {
	const links: { id: number; name: string; link: string }[] = [
		{ id: 1, name: 'Home', link: '/' },
		{ id: 2, name: 'Favorites', link: '/favorites' },
	];

	const handleSwitchFahrenheit = () => {
		switchFahrenheit({ isFahrenheit: !isFahrenheit });
	};

	return (
		<AppBar position="static" color="primary">
			<Toolbar>
				<Grid container justify="space-between">
					<div>
						<IconButton onClick={handleSwitchFahrenheit}>
							{isFahrenheit ? (
								<img src={fahrenheitIcon} width="30px" alt="dark theme icon"></img>
							) : (
								<img src={celsiusIcon} width="30px" alt="light theme icon"></img>
							)}
						</IconButton>
					</div>
					<div>
						{links.map(({ id, name, link }) => (
							<NavLink
								exact
								key={id}
								to={link}
								// className={styles.link}
								// activeClassName={styles.active}
							>
								<Button color="secondary">{name}</Button>
							</NavLink>
						))}
					</div>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default connector(Navbar);
