const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development', // Use 'production' for optimized builds
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js', // JS output
    },
    module: {
        rules: [
            {
                test: /\.scss$/, // Match .scss files
                use: [
                    MiniCssExtractPlugin.loader, // Extract CSS into files
                    'css-loader', // Resolves CSS imports and URLs
                    {
                        loader: 'sass-loader', // Compiles SCSS to CSS
                        options: {
                            sassOptions: {
                                includePaths: [path.resolve(__dirname, 'src/globalStyles')], // Resolve SCSS imports
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'design-system.css', // Output CSS file
        }),
    ],
    resolve: {
        extensions: ['.js', '.scss'], // Resolve these extensions automatically
    },
};
