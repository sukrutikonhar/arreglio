export const locales = ["en", "fr", "es", "sv"] as const;
export type Locale = (typeof locales)[number];
