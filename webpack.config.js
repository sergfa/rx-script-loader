const configMode = env => require(`./build_scripts/webpack.${env.mode}`)(env);
const webpackMerge = require('webpack-merge');

module.exports = (env = {
    mode: "production"
}) => {

    return webpackMerge({
        mode: env.mode,
        output: {
            filename: "rx-script-loader.js",
            library: 'RxScriptLoader',
            libraryTarget: 'umd'
        },
        module: {
            rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader'
            }]
        },
        resolve: {
            extensions: ['.ts', '.js', '.json']
        },
        devtool: 'source-map',
    }, configMode(env));
}