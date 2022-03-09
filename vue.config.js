module.exports = {
    //关闭esclint
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://39.98.123.211',
                //路径重写pathRewrite: { '^/api': '' },
            },
        },
    },
}