module.exports = {
	testURL: 'http://localdev.bestbuy.com',
	rootDir: 'src',
	setupFilesAfterEnv: ['<rootDir>/test/jest-global.js'],
	coverageDirectory: '<rootDir>/../coverage',
	transform: {
		'^.+\\.jsx?$': 'babel-jest',
	},
	moduleNameMapper: {
        '\\.(svg|jpg|png|less|css)$': '<rootDir>/test/empty-module.js',
    }
}