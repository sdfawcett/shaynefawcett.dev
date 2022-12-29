const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const disableStaticImages = {
    images: {
      disableStaticImages: true
  }
}

module.exports = withPlugins([optimizedImages], disableStaticImages);
