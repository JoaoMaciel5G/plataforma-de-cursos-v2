"use client"

import { Courses } from "@prisma/client"
import { Trophy, MonitorSmartphone, GanttChartSquare, Clock10 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {useShoppingCart} from "use-shopping-cart"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CourseDetailsPageClient({item}: {item: Courses}){
    const {addItem} = useShoppingCart()
    const router = useRouter()

    function addToCart () {
        addItem({
            name: item.title,
            id: item.id,
            description: item.description,
            price: Number(item.price),
            currency: "BRL",
            image: item.imageUrl
        })
        toast("Você adicionou um produto ao carrinho!", {
            action: {
                label: "Visualizar",
                onClick: () => router.push("/cart")
            }
        })
    }

    return(
        <section className="flex justify-center flex-col md:flex-row">
            <div className="md:w-2/5 mt-20 w-full px-7">
                <h2 className="font-semibold text-4xl my-4 text-primary">
                    {item?.title}
                </h2>
                <p className="text-lg my-4">
                    {item?.description}
                </p>
                <div>
                    <h2 className="text-2xl font-semibold my-2 text-primary">Este curso possui:</h2>
                    <div className="flex my-3">
                        <Trophy className="mr-5"/>
                        <p>Certificado de conclusão</p>
                    </div>
                    <div className="flex my-3">
                        <MonitorSmartphone className="mr-5"/>
                        <p>Acesso no dispositivo móvel e na TV</p>
                    </div>
                    <div className="flex my-3">
                        <GanttChartSquare className="mr-5"/>
                        <p>Mais de 10 projetos práticos para treinar e praticar oque foi ensinado</p>
                    </div>
                </div>
                <div className="mt-8">
                    <Link href="/plains" className="bg-primary text-lg p-2 rounded-lg">Experimente nossos Planos</Link>
                </div>
            </div>
            <div className="mt-20 px-7 max-md:grid">
                <Card className="w-[300px] max-md:justify-self-center">
                    <CardContent className="rounded-lg ">
                        <Image src={item?.imageUrl} alt="Imagem curso" className="w-full" width={0} height={0} />
                    </CardContent>
                </Card>
                <div>
                    <div className="flex my-3 items-center justify-between">
                        <h2 className="font-semibold text-2xl">{Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"}).format(Number(item.price))}</h2>
                        <p className="line-through text-lg text-zinc-500">R$ 39,90</p>  
                    </div>
                    <p className="text-lg">R$ 10 de desconto</p>
                    <div className="flex">
                        <Clock10 className="text-red-600 mr-2"/>
                        <p className="text-red-600"><span className="font-semibold">Só mais 5 dias</span> por esse preço</p>
                    </div>
                </div>
                <Button onClick={addToCart} className="block bg-primary my-4 text-white text-lg p-2 rounded-lg hover:bg-violet-650">Adicionar ao carrinho</Button>
                <div>
                    <p className="my-3 text-lg">Garantia de devolução do dinheiro em 7 dias</p>
                </div>
            </div>
        </section>
    )
}