import "./globals.css";
import { Tenor_Sans, Playfair_Display } from "next/font/google";

// ✅ Fonts importeren via next/font/google
const tenorSans = Tenor_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-tenor-sans",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair-display",
});

// ✅ Metadata voor SEO
export const metadata = {
  title: "Angelina Coffie Portfolio",
  description: "Portfolio website designed and developed by Angelina Coffie",
};

// ✅ Layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${tenorSans.variable} ${playfairDisplay.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
