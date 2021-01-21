export const isProduction = process.env.NODE_ENV === 'production';
export const isTest = process.env.NODE_ENV === 'test';
export const isDevelopment = process.env.NODE_ENV === 'development';

export const celsiusToFahrenheit = (num: number): number => {
	return Math.floor((num * 9) / 5 + 32);
};
