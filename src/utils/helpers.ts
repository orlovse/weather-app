export const isProduction = process.env.NODE_ENV === 'production';
export const isTest = process.env.NODE_ENV === 'test';
export const isDevelopment = process.env.NODE_ENV === 'development';

export const celsiusToFahrenheit = (num: number): number => {
	return Math.floor((num * 9) / 5 + 32);
};

// export const loadFromLocalStorage = (key: string): any => {
// 	try {
// 		const serialisedState = localStorage.getItem(key);
// 		if (serialisedState === null) return undefined;
// 		return JSON.parse(serialisedState);
// 	} catch (e) {
// 		console.warn(e);
// 		return undefined;
// 	}
// };

// export const saveToLocalStorage = (key: string, value: string | number | object) => {
// 	try {
// 		if (typeof value === 'object' && value.toString() === '[object Object]') {
// 			const valueFromLocalStorage = loadFromLocalStorage(key);
// 			let fill = {};
// 			if (typeof valueFromLocalStorage === 'object' && valueFromLocalStorage.toString() === '[object Object]') {
// 				fill = { ...valueFromLocalStorage };
// 			}
// 			value = { ...fill, ...value };
// 		}
// 		const serialisedState = JSON.stringify(value);
// 		localStorage.setItem(key, serialisedState);
// 	} catch (e) {
// 		console.warn(e);
// 	}
// };

// export const removeFromLocalStorage = (key: string) => {
// 	try {
// 		const favorites = loadFromLocalStorage('favorites');
// 		if (typeof favorites === 'object' && favorites.toString() === '[object Object]') {
// 			// delete favorites[key];
// 			const newFavorites = JSON.stringify(favorites);
// 			localStorage.setItem('favorites', newFavorites);
// 		}
// 	} catch (e) {
// 		console.warn(e);
// 	}
// };
