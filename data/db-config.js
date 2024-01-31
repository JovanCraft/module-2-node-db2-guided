const knex = require('knex')
const configs = require('../knexfile')
const { env } = require('node:process')

const ENV = env.NODE_ENV || 'development'


module.exports = knex(configs[ENV])
