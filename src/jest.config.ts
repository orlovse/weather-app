import path from 'path';
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	displayName: {
		name: 'template',
		color: 'blue',
	},
	preset: 'ts-jest',
	collectCoverageFrom: ['**/src/**/*.{js,ts,tsx}', '!**/testingUtils/**'],
	coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/testingUtils/**'],
	verbose: true,
	notify: true,
	notifyMode: 'failure',
	testMatch: ['**/src/__tests__/*.{js,ts,tsx}', '**/*test*.{js,ts,tsx}'],
	watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
	setupFilesAfterEnv: [path.resolve(__dirname, 'src', 'setupTests.ts')],
	snapshotSerializers: ['jest-styled-components/serializer'],
};

export default config;
