import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soar",
  description: "Soart test task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
