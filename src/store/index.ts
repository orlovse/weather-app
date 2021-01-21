import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// We'll be using Redux Devtools. We can use the `composeWithDevTools()`
import { composeWithDevTools } from 'redux-devtools-extension';
// `react-router-redux` is deprecated, so we use `connected-react-router`.
// This provides a Redux middleware which connects to our `react-router` instance.
import { routerMiddleware } from 'connected-react-router';
import history from 'router/history';
import rootReducer from './reducers';
import rootSaga from './sagas';
import { ApplicationState, AppAction } from './types';

const configureStore = (initialState?: ApplicationState): Store<ApplicationState, AppAction> => {
	const composeEnhancers = composeWithDevTools({});
	// create the redux-saga middleware
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(
		rootReducer(history),
		initialState,
		composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
	);

	sagaMiddleware.run(rootSaga);
	return store;
};

export default configureStore;
