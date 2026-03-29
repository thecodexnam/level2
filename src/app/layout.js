import { Geist, Geist_Mono } from "next/font/google";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en">
      <body>
      <h1>Hello</h1>
        {children}
      </body>
    </html>
  );
}
