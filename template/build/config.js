'use strict'
const pkg = require('../package')

module.exports = {
    port: 8080,
    title: '{{name}}',
    vendor: Object.keys(pkg.dependencies),
    babel: {
        babelrc: false,
        presets: [
            ['es2015', {modules: false}],
            'stage-1'
        ]
    },
    postcss: [
        require('postcss-nested'),
        require('postcss-cssnext')
    ]
}
