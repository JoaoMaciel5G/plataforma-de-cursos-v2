"use client"

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { PlainSignatureProps } from "@/app/_types/plainsInterface";
import Link from "next/link";

const PlainClientComponent = ({plains}: {plains: PlainSignatureProps}) => {
    return (
        <Card key={plains.id} className="px-5 py-6 max-w-[450px] min-w-[450px]">
            <CardContent className="flex flex-col h-full gap-y-2">
                <CardTitle className="text-3xl font-medium py-4 text-center">{plains.option}</CardTitle>
                <div className="flex justify-between">
                    <p className="line-through text-xl text-slate-400">{Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"}).format(Number(plains.price))}</p>
                    <p className="text-xl">Por apenas {Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"}).format(Number(plains.discountPrince))}</p>
                </div>
                <div className="my-4">
                    <p>{plains.description}</p>
                </div>
                <Link href={`/plains/${plains.id}`} className="bg-primary text-lg mt-auto text-center rounded-lg py-2">Obter Plano</Link>
            </CardContent>
        </Card>
    );
}
 
export default PlainClientComponent