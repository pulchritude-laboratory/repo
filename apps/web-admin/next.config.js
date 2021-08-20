const withPlugins = require('next-compose-plugins')

const withNx = require('@nrwl/next/plugins/with-nx')({
  nx: {
    svgr: true
  },
  basePath: '/admin'
})

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: true
})

module.exports = withPlugins([withBundleAnalyzer, withNx])
