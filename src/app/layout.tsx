import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import AuthProvider from "./_providers/auth";
import CartContext from "./_providers/cart";

const roboto = Roboto({weight: ["100", "300", "400", "500", "700", "900"], subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Pro Tech Cursos",
  description: "A Melhor plataforma de cursos de desenvolvimento web",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="pt-br">
        <body className={`${roboto.className} dark`}>
            <AuthProvider>
              <CartContext>
                {children}
              </CartContext>
            </AuthProvider> 
        </body>
    </html>
  );
}
