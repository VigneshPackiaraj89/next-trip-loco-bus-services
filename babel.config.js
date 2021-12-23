module.exports = {
    presets: [
        '@babel/preset-react',
        "@babel/preset-env",
    ],
    plugins : [
        ["@babel/plugin-proposal-optional-chaining", {"loose": false}],
        "@babel/plugin-proposal-class-properties"
    ]
}