/** @type {import('next').NextConfig} */

const nextConfig = {
    i18n: {
        locales: ['en', 'ko'],
        defaultLocale: 'en',
        domains: [
          {
            domain: 'example.com',
            defaultLocale: 'en',
          },
          {
            domain: 'example.nl',
            defaultLocale: 'ko',
          },
        ],
      },
};

module.exports = nextConfig;
