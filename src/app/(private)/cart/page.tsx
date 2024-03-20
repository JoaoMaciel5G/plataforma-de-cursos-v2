"use client"

import {useShoppingCart} from "use-shopping-cart"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

function Cart() {
    const {totalPrice, cartCount, clearCart, cartDetails, removeItem, redirectToCheckout} = useShoppingCart()

    async function checkout() {        
        const response = await fetch("api/checkout", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(cartDetails)
        })
        

        const {id} = await response.json()

        const result = await redirectToCheckout(id)
    }
    
    return ( 
        <main className="flex flex-col md:flex-row md:justify-between">
            <section className="md:w-3/4 mt-28 mx-6">
                <div className="my-10">
                    <h2 className="text-3xl text-primary">Meu carrinho</h2>   
                </div>
                {cartCount == 0 && (<h2 className="text-2xl text-primary">Seu carrinho está vazio</h2>)}
                <div className="flex flex-col w-full">
                {
                    cartDetails && Object.keys(cartDetails).map((key)=>{
                        const image = cartDetails[key].image!
                        return (
                            <div className="border-b-[1px] border-zinc-400 py-6 flex" key={cartDetails[key].id}>
                                <Card className="w-[160px] mr-6">
                                    <CardContent className="w-full h-full">
                                        <Image width={300} height={0} className="w-full h-full p-2" src={image} alt={cartDetails[key].name}/>
                                    </CardContent>
                                </Card>
                                <div>
                                    <div>
                                        <h2 className="text-lg mb-2">{cartDetails[key].name}</h2>
                                        <p className="text-xl text-zinc-400 font-light mb-9">{Intl.NumberFormat("PT-BR", {style: "currency", currency: "BRL"}).format(cartDetails[key].price)}</p>
                                    </div>
                                    <Button className="bg-primary rounded-lg p-2 " onClick={()=>removeItem(cartDetails[key].id)}>Remover do carrinho</Button>
                                </div>  
                            </div>
                        )})
                }
                </div>
            </section>
            <section className="mt-28 px-6 md:w-[65%] 2xl:w-1/4">
                <h2 className="border-b-[1px] border-zinc-400 text-3xl p-3 text-purple">Detalhes</h2>
                <div className="border-b-[1px] border-zinc-400 flex justify-between py-5">
                    <p className="text-lg">Subtotal</p>
                    <p className="text-lg">{Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"}).format(totalPrice!)}</p>
                </div>
                <div className="flex justify-between pt-5">
                    <p className="text-lg">Quantidade itens</p>
                    <p className="text-lg">{cartCount}</p>
                </div>
                <div className="py-7">
                    <div className="flex flex-col">
                        <label htmlFor="cupom" className="text-lg my-2">Tem cupom de desconto?</label>
                        <input type="text" placeholder="Cupom de desconto" className="text-black py-2 px-3 outline-none rounded-md mb-7"/>
                        <Button className="bg-primary rounded-lg p-2 text-lg">Verificar Cupom</Button>
                    </div>
                    <div className="flex justify-between mt-28 mb-4">
                        <p>Total</p>
                        <p>{Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"}).format(totalPrice!)}</p>
                    </div>
                    <Button disabled={cartCount == 0} onClick={checkout} className="bg-primary rounded-lg p-2 text-lg w-full my-4">Finalizar compra</Button>
                    <Button disabled={cartCount == 0} onClick={clearCart} className="bg-primary rounded-lg p-2 text-lg">Limpar Carrinho</Button>
                </div>
            </section>
        </main>
     );
}

export default Cart;