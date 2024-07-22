import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './webflow.css';
import './portfolio.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Robin Nguyen Portfolio",
  description: "Utilized Next.js to create this portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
