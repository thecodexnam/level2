import { resolve } from "styled-jsx/css";
import "./globals.css";

export default function RootLayout({children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
