/** @type {import('next').NextConfig} */

module.exports = {
  webpack(config) {
    // eslint-disable-next-line no-param-reassign
    config.infrastructureLogging = { debug: /PackFileCache/ };
    return config;
  },
};
