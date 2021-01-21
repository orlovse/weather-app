import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as routes from './routes';
import routeConfig from './routes.config';
import LoginLayout from 'pages/auth';
import AppLayout from 'pages/app/Layout';
import PrivateRoute from './PrivateRoute';

const Application: React.FC = () => {
	return (
		<AppLayout>
			<Suspense fallback={''}>
				<Switch>
					{routeConfig.appRoutes.map(route => (
						<PrivateRoute {...route} key={route.path} />
					))}
					<Redirect to={routes.HOME} />
				</Switch>
			</Suspense>
		</AppLayout>
	);
};

const RouterGate: React.FC = () => {
	return (
		<Switch>
			<Route path={routes.LOGIN} component={LoginLayout} />
			<Route path={routes.APP} component={Application} />
		</Switch>
	);
};
export default RouterGate;
