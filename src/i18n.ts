import { getRequestConfig } from "next-intl/server";
import { locales } from "./config";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) {
    return {
      messages: {},
      locale: "en",
    };
  }

  const messages = {
    Navigation: (await import(`./locales/${locale}/navigation.json`)).default,
    Home: (await import(`./locales/${locale}/home.json`)).default,
  };

  return {
    messages,
    locale,
  };
});
