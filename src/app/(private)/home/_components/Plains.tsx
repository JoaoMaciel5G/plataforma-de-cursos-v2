import { db } from "@/app/_lib/prisma";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plains } from "@prisma/client";
import Link from "next/link";

const PlainSignature = async () => {
    const plains = await db.plains.findMany({})
    return (
        <div className="flex flex-col mx-5 gap-5 my-6 md:flex-row">
            {
                plains.map((plain: Plains)=>(
                    <Card key={plain.id} className="px-5">
                        <CardContent className="text-center py-12">
                            <div>
                                <h2 className="text-4xl font-medium my-5 text-center">{plain.option}</h2>
                                <div className="flex flex-col gap-5">
                                    <p>{plain.description}</p>
                                    <p className="line-through text-2xl text-slate-400">{Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"}).format(Number(plain.price))}</p>
                                    <p className="text-2xl mb-5">Por apenas {Intl.NumberFormat("pt-br", {style: "currency", currency :"BRL"}).format(Number(plain.discountPrince))}</p>
                                </div>
                                <Button  className="text-lg bg-primary text-white p-2 rounded-lg my-5">Obter Plano</Button>
                            </div>
                        </CardContent>
                    </Card>
                ))
            }
        </div>
    );
}
 
export default PlainSignature;