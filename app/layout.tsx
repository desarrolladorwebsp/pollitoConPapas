import type { Metadata } from "next";
import { Fraunces, Inter, Caveat } from "next/font/google";
import { WhatsAppFloatButton } from "@/app/components/whatsapp-float-button";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pollitosconpapas.cl"),
  applicationName: "Pollitos con Papas",
  title: {
    default: "Pollitos con Papas | Pollo asado y comida tradicional en Chile",
    template: "%s | Pollitos con Papas",
  },
  description:
    "Pollitos con Papas ofrece pollo asado, papas fritas y comida tradicional chilena en Copiapó. Menú casero, delivery y sabores de la casa para compartir.",
  keywords: [
    "Pollitos con Papas",
    "pollo asado Copiapó",
    "comida chilena Copiapó",
    "pollos con papas",
    "pollo dorado",
    "papas fritas",
    "delivery Copiapó",
    "restaurant Copiapó",
    "menú tradicional chileno",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pollitos con Papas | Pollo asado y comida tradicional en Chile",
    description:
      "Sabores caseros, pollo dorado y comida chilena en Copiapó. Descubre nuestro menú y pide directo por WhatsApp.",
    url: "https://www.pollitosconpapas.cl",
    siteName: "Pollitos con Papas",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pollitos con Papas",
    description:
      "Pollo asado, papas fritas y sabores tradicionales chilenos en Copiapó.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport = {
  themeColor: "#2e2013",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${inter.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-coffee font-sans">
        {children}
        <WhatsAppFloatButton />
      </body>
    </html>
  );
}
