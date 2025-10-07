import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shiv Shankar Tiwari - Full-Stack Software Engineer",
  description: "Polyglot Software Engineer with 6+ years experience building high-performance applications across mobile, web, and backend systems. Specialized in React Native, Flutter, Node.js, TypeScript, and AWS cloud technologies.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
