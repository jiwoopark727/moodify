const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
const baseConfig = {
  images: {
    domains: ['openweathermap.org', 'i.scdn.co'],
  },
};

module.exports = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
})(baseConfig);
