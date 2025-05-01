import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";

import "./globals.css";
import "@mantine/core/styles.css";
import { getLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Providers } from "@/components";
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
      <body className="h-screen">
        <Providers>
          <NextIntlClientProvider>
            <MantineProvider>{children}</MantineProvider>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
