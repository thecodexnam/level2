import "./globals.css";

export default function RootLayout({ marketing, team,children }) {
  return (
    <html lang="en">
      <body className="flex h-screen w-screen">
        <div className="w-1/2 bg-yellow-500 flex items-center justify-center font-sans">{team}</div>
        <div className="w-1/2 bg-green-500 flex items-center justify-center font-sans">{children}</div>
        <div className="flex h-full w-1/2 items-center justify-center bg-blue-500 font-sans">{marketing}</div>
      </body>
    </html>
  );
}
