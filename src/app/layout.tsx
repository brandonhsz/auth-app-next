import type { Metadata } from "next";

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";

import "./globals.css";
import "@mantine/core/styles.css";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Pro180 test",
  description: "Basic authentication flow with Next.js and Mantine",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
