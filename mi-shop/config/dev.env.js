'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_HOST: '"http://192.168.1.72:8080"' // 开发环境接口地址(这里是增加的内容)
})
