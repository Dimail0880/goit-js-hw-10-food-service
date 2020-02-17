const webpackMerge = require('webpack-merge');
const loadSharedConfig = require('./configs/shared');

const loadModeConfig = env => require(`./configs/${env.mode}`)(env);

module.exports = env =>
    webpackMerge(loadSharedConfig(env), loadModeConfig(env)); {
    module: {
        rules: [

            { test: /\.hbs$/, exclude: /node_modules/, use: "handlebars-loader" }
        ]
    }
}