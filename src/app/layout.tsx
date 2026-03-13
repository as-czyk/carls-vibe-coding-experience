import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fira_Code } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Podolski Claude — Der KI-Agent, der einfach macht",
  description:
    "Grills anzünden, Tore schießen, E-Mails beantworten — Poldi macht das. Open Source KI-Agent von der Community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <body
        className={`${jakarta.variable} ${firaCode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
