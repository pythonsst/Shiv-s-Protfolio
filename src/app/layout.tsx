import type { Metadata } from "next";
import { Instrument_Sans, Delicious_Handrawn, Roboto_Mono } from "next/font/google";
import "./globals.css";

// Avenir is a paid font; Instrument Sans (used by cuepilot's logo) is the free stand-in.
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument",
  display: "swap",
});

const deliciousHandrawn = Delicious_Handrawn({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-delicious",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shiv Shankar Tiwari - Full-Stack Software Engineer",
  description:
    "Polyglot Software Engineer with 7+ years experience building high-performance applications across mobile, web, and backend systems. Specialized in React Native, Flutter, Node.js, TypeScript, and AWS cloud technologies.",
  icons: {
    icon: "/favicon.svg",
  },
};

// Set the theme class before paint to avoid a flash of the wrong theme.
const themeScript = `
(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}var d=document.documentElement;d.classList.toggle('dark',t==='dark');d.style.colorScheme=t;}catch(e){}})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${deliciousHandrawn.variable} ${robotoMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
