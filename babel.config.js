module.exports = {
    presets: [
        '@babel/preset-react',
    ],
    plugins : [
        ["@babel/plugin-proposal-optional-chaining", {"loose": false}]
    ]
}