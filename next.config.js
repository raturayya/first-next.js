const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    domains: [
      's3.ap-southeast-1.amazonaws.com',
      's3-ap-southeast-1.amazonaws.com',
      'lpimgdev.chakrarewards.com',
      'miniloyalty.chakra.uno'
    ]
  },
  optimizeFonts: true,
  devIndicators: {
    buildActivity: false
  }
};
