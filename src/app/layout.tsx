import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";

import "@radix-ui/themes/styles.css";

export const metadata: Metadata = {
  title: "Deploy Cloud Flare",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Theme>
        <body>{children}</body>
      </Theme>
    </html>
  );
}
