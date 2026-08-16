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
  title: "Pollitos con Papas | El sabor de siempre, como en casa",
  description:
    "Pollo asado dorado y papas fritas crujientes, con el sabor casero de la tradición chilena. Descubre nuestro menú y pide ahora.",
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
