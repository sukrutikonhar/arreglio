import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "fr", "es", "sv"],

  // Used when no locale matches
  defaultLocale: "en",

  // Domains for each locale (optional)
  // domains: [
  //   {
  //     domain: 'arreglio.com',
  //     defaultLocale: 'en',
  //   },
  //   {
  //     domain: 'arreglio.fr',
  //     defaultLocale: 'fr',
  //   },
  //   {
  //     domain: 'arreglio.es',
  //     defaultLocale: 'es',
  //   },
  //   {
  //     domain: 'arreglio.se',
  //     defaultLocale: 'sv',
  //   },
  // ],
});

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
