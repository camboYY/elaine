const path = require('path')

module.exports = Object.assign(
  {
    port: 1333,
    websitename: 'e-cambo.com'
  },
  require(path.resolve(__dirname, `json/config.${process.env.NODE_ENV}.json`))
)
