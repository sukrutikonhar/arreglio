import { getRequestConfig } from "next-intl/server";

// Define supported locales
const locales = ["en", "fr", "es", "sv"] as const;

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    return {
      messages: {},
      locale: "en" as const,
    };
  }

  return {
    messages: (await import(`../locales/${locale}.json`)).default,
    locale: locale as string,
  };
});
