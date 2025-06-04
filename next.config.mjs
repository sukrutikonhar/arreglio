import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const config = {
  // Your existing Next.js config options
};

export default withNextIntl(config);
