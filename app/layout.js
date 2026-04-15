import { Geist, Geist_Mono } from "next/font/google";
import '@fontsource-variable/nunito-sans';
import "./globals.css";


export const metadata = {
  title: "Nike Store",
  description: "Tailwind Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased animate-fadeIn`}
      >
        {children}
      </body>
    </html>
  );
}
