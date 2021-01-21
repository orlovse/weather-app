import React, { useMemo } from 'react';
import { Route, Redirect } from 'react-router-dom';
import type { IRouteConfig } from './routes.config';
// import * as routes from './routes';

const AppLayout: React.FC<IRouteConfig> = ({ path, component: Component, exact }: IRouteConfig) => {
	// here we add the private route logic
	// const isAuthenticated = true;
	// const redirectCase = false;

	const redirectTo: string | false = useMemo(() => {
		// switch (true) {
		// 	case redirectCase:
		// 		return routes.LOGIN;
		// 	default:
		// 		return null;
		// }
		// return null;
		return false;
	}, []);

	return <Route path={path} render={routeProps => (redirectTo ? <Redirect to={redirectTo} /> : <Component {...routeProps} />)} />;
};

export default AppLayout;
