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
        "07": "./modules/07.js",
        "08": "./modules/08.js",
        "09": "./modules/09.js",
        "10": "./modules/10.js",
        "11": "./modules/11.js",
        "12": "./modules/12.js",
        "13": "./modules/13.js",
        "14": "./modules/14.js",
        "15": "./modules/15.js",
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