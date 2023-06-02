import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Colección de monedas",
  description: "Catálogo de monedas de la colección",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <header>
          <div className="container flex justify-between flex-row m-auto">
            <h1 className="text-4xl">
              <Link href="/">Monedas</Link>
            </h1>
          </div>
        </header>
        <main className="container m-auto flex min-h-screen flex-col items-center justify-between p-24 pl-0 pr-0">
          {children}
        </main>
      </body>
    </html>
  );
}
