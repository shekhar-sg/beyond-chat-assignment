import StoreProvider from "@/store/Provider";
import ThemeRegistry from "@/styles/theme/theme-registry";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Agent Chat",
  description: "A chat application for agents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <ThemeRegistry>
          <body>{children}</body>
        </ThemeRegistry>
      </StoreProvider>
    </html>
  );
}
