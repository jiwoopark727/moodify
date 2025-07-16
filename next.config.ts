import withPWA from 'next-pwa';
import type { NextConfig } from 'next';

const baseConfig: NextConfig = {
  images: {
    domains: ['openweathermap.org', 'i.scdn.co'],
  },
};

export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
})(baseConfig);
