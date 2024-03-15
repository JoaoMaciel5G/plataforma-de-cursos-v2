"use client"

import { CartProvider } from "use-shopping-cart";

export default function CartContext({children}: {children: React.ReactNode}){
    const public_key = process.env.NEXT_PUBLIC_PUBLISHED_KEY!
    return(
        <CartProvider
         cartMode="checkout-session"
         shouldPersist={true}
         stripe={public_key}
         currency="BRL"
        >
            {children}
        </CartProvider>
    )
}