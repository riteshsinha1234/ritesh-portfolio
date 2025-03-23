import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const inter = localFont({
  src: "./fonts/Inter-Regular.ttf",
  variable: "--font-inter",
  weight: "100 900",
});
const lato = localFont({
  src: "./fonts/Lato-Regular.ttf",
  variable: "--font-lato",
  weight: "100 900",
});
const outfit = localFont({
  src: "./fonts/Outfit-Regular.ttf",
  variable: "--font-outfit",
  weight: "100 900",
});
const roboto = localFont({
  src: "./fonts/Roboto-Regular.ttf",
  variable: "--font-roboto",
  weight: "100 900",
});

export const metadata = {
  title: "Ritesh Portfolio",
  description: "This is my Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${lato.variable} ${outfit.variable} ${roboto.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
