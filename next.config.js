const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = Object.assign(withBundleAnalyzer(), {
  trailingSlash: true,
})
