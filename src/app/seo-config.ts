import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  defaultTitle: "Arreglio - Fixing Repairs for Everyone",
  titleTemplate: "%s | Arreglio",
  description: "Connecting customers and workshops through a smart platform built on trust and simplicity.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arreglio.com/",
    siteName: "Arreglio",
    images: [
      {
        url: "https://arreglio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arreglio",
      },
    ],
  },
  twitter: {
    handle: "@arreglio",
    site: "@arreglio",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
  ],
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "theme-color",
      content: "#000000",
    },
  ],
};

export default config;
