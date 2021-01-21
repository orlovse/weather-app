import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Button, Grid, Toolbar } from '@material-ui/core';

const Navbar: FC = () => {
	const links: { id: number; name: string; link: string }[] = [
		{ id: 1, name: 'Home', link: '/' },
		{ id: 2, name: 'Favorites', link: '/favorites' },
	];

	return (
		<AppBar position="static" color="primary">
			<Toolbar>
				<Grid container justify="space-between">
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

export default Navbar;
