const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const config = {
  images: {
    domains: ["localhost"],
  },
};

module.exports = withNextIntl(config);
