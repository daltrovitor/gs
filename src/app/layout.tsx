// Hello World
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://goiania.prx.app.br"),
  title: "GOIÂNIA SHOPPING × PRX | The Next Generation Mall",
  description:
    "Uma ponte entre duas gerações, dois aplicativos e um mesmo ecossistema de consumo. Proposta de parceria estratégica.",
  keywords: [
    "Goiânia Shopping",
    "PRX",
    "The Next Generation Mall",
    "Gen Z",
    "Geração Z",
    "Shopping Center",
    "PRX Pass",
    "PRX Lunch",
    "PRX Drop",
    "PRX Next Space",
  ],
  authors: [{ name: "Rafael Molina" }, { name: "Viraweb" }],
  openGraph: {
    title: "GOIÂNIA SHOPPING × PRX | The Next Generation Mall",
    description:
      "Uma ponte entre duas gerações, dois aplicativos e um mesmo ecossistema de consumo. Proposta de parceria estratégica 2026.",
    url: "https://prx.app.br",
    siteName: "GOIÂNIA SHOPPING × PRX",
    images: [
      {
        url: "/brand/goiania-shopping.jpg",
        width: 1024,
        height: 343,
        alt: "GOIÂNIA SHOPPING × PRX",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/brand/prx-app-icon.svg",
    apple: "/brand/prx-app-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={inter.variable}>
      <body suppressHydrationWarning className="font-sans bg-white text-slate-900 selection:bg-[#7607FD] selection:text-white">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
