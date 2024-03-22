import { db } from "@/app/_lib/prisma";
import { Courses } from "@prisma/client";
import CourseDetailsPageClient from "./clientComponent";
import { CourseItemsProps } from "@/app/_types/coursesInterface";

export async function generateStaticParams() {
    const courses = await db.courses.findMany({})
  
    return courses.map((courses: Courses) => ({
      id: courses.id
    }));
}

export default async function CoursesDetailsPage({ params }: { params: { id: string } }){
    const {id} = params

    const courses = await db.courses.findUnique({
        where: {
            id
        }
    })

    const coursesData = {
        ...courses,
        price: courses?.price.toString(),
    } as CourseItemsProps
    return(
        <>
            <CourseDetailsPageClient key={courses?.id} item={coursesData}/> 
        </>    
    )
}