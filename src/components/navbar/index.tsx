import React, { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppBar, Button, Grid, Toolbar, IconButton, Container } from '@material-ui/core';

import { isFahrenheitSelector, isDarkSelector } from 'store/selectors/localUserOptions.selector';
import { ApplicationState } from 'store/types';
import { switchFahrenheit, switchDark } from 'store/actions/localUserOptions.actions';

import celsiusIcon from '../../resources/svg/celsius.svg';
import fahrenheitIcon from '../../resources/svg/fahrenheit.svg';
import darkIcon from '../../resources/svg/dark.svg';
import lightIcon from '../../resources/svg/light.svg';

const connector = connect(
	(state: ApplicationState) => ({
		isFahrenheit: isFahrenheitSelector(state),
		isDark: isDarkSelector(state),
	}),
	{ switchFahrenheit, switchDark }
);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Navbar: FC<PropsFromRedux> = ({ isFahrenheit, isDark, switchFahrenheit, switchDark }: PropsFromRedux) => {
	const links: { id: number; name: string; link: string }[] = [
		{ id: 1, name: 'Home', link: '/' },
		{ id: 2, name: 'Favorites', link: '/favorites' },
	];

	const handleSwitchFahrenheit = () => {
		switchFahrenheit({ isFahrenheit: !isFahrenheit });
	};

	const handleSwitchTheme = () => {
		switchDark({ isDark: !isDark });
	};

	return (
		<AppBar position="static" className="navbar">
			<Toolbar>
				<Container>
					<Grid container justify="space-between">
						<div>
							<IconButton onClick={handleSwitchTheme}>
								{isDark ? <img src={darkIcon} alt="dark theme icon"></img> : <img src={lightIcon} alt="light theme icon"></img>}
							</IconButton>

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
				</Container>
			</Toolbar>
		</AppBar>
	);
};

export default connector(Navbar);
