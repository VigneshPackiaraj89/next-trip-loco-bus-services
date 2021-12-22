module.exports = {
    testURL: 'http://localhost',
    rootDir: 'src',
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(svg|jpg|png|less|css)$': '<rootDir>/test/empty-module.js',
    },
}