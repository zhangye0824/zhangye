module.exports = {
    resolve: {
        extensions: ['.js', '.es'],
        alias: {
            vue: '/Users/zhangye/node_modules/vue/dist/vue.js'
        }
    },
    entry: {
        "01": "./modules/01.js",
        "02": "./modules/02.js",
        "03": "./modules/03.js",
        "04": "./modules/04.js",
        "05": "./modules/05.js",
        "06": "./modules/06.js",
    },
    output: {
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules',
                include: '/modules',
                options: {
                    presets: ['env']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    mode: 'development'
}