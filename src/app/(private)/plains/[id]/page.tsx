import { db } from "@/app/_lib/prisma";
import { Courses, Plains } from "@prisma/client";
import PlainsPageClient from "./clientComponent";

export async function generateStaticParams() {
    const plains = await db.plains.findMany({})
  
    return plains.map((plains: Plains) => ({
      id: plains.id
    }));
}

export default async function CoursesDetailsPage({ params }: { params: { id: string } }){
    const {id} = params

    const plains = await db.plains.findUnique({
        where: {
            id
        }
    }) as Plains

    return(
        <>
            <PlainsPageClient item={plains}/>
        </>    
    )
}