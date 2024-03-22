import { db } from "@/app/_lib/prisma";
import { Courses, Plains } from "@prisma/client";
import PlainsPageClient from "./clientComponent";
import { PlainSignatureProps } from "@/app/_types/plainsInterface";

export async function generateStaticParams() {
    const plains = await db.plains.findMany({})
  
    return plains.map((plains: Plains) => ({
      id: plains.id
    }));
}

export default async function PLainsDetailsPage({ params }: { params: { id: string } }){
    const {id} = params

    const plains = await db.plains.findUnique({
        where: {
            id
        }
    })

    const plainsData = {
        ...plains,
        price: plains?.price.toString(),
        discountPrince: plains?.discountPrince.toString()
    } as PlainSignatureProps

    return(
        <>
            <PlainsPageClient item={plainsData}/>
        </>    
    )
}