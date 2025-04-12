import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Timefor.dev",
  description: "It's time for development!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
