"use client"

import { PlainSignatureProps } from "@/app/_types/plainsInterface";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const PlainSignature = ({plain}: {plain: PlainSignatureProps}) => {
    const router = useRouter()
    return (
        <div className="flex flex-col mx-5 gap-5 my-6 lg:flex-row">
            <Card className="px-5 flex justify-center">
                <CardContent className="text-center py-12 w-fit">
                    <div>
                        <h2 className="text-4xl font-medium my-5 text-center">{plain.option}</h2>
                        <div className="flex flex-col gap-5">
                            <p>{plain.description}</p>
                            <p className="line-through text-2xl text-slate-400">{Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"}).format(Number(plain.price))}</p>
                            <p className="text-2xl mb-5">Por apenas {Intl.NumberFormat("pt-br", {style: "currency", currency :"BRL"}).format(Number(plain.discountPrince))}</p>
                        </div>
                        <Button onClick={() => router.push(`/plains/${plain.id}`)} className="text-lg bg-primary text-white p-2 rounded-lg my-5">Obter Plano</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
 
export default PlainSignature;