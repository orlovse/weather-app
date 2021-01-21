import { lazy } from 'react';
import type { LazyExoticComponent, FC } from 'react';
import type { RouteProps } from 'react-router-dom';
import * as routes from './routes';

export interface IRouteConfig {
	path: string;
	exact: boolean;
	component: LazyExoticComponent<FC<RouteProps>>;
	routes: IRouteConfig[];
}

const routeConfig = {
	appRoutes: [
		{
			path: routes.HOME,
			exact: true,
			component: lazy(() => import(/*webpackChunkName: "HOME"*/ 'pages/app/home')),
			routes: [],
		},
	],
	loginRoutes: [
		{
			path: routes.LOGIN,
			exact: true,
			component: lazy(() => import(/*webpackChunkName: "LOGIN"*/ 'pages/auth')),
			routes: [],
		},
	],
};

export default routeConfig;
