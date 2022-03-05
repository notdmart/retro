const path = require("path");
const slsw = require("serverless-webpack");

module.exports = {
    target: "node14",
    entry: slsw.lib.entries,
    mode: "development",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "commonjs2",
        sourceMapFilename: "[file].map",
    },
    experiments: {
        outputModule: true,
    },
};
