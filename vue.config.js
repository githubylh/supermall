module.export = {
    configureWebpack: {
        resolve: {
            alias:{
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'networks':'@/networks',
                'views':'@/views',
            }
        }
    }
}