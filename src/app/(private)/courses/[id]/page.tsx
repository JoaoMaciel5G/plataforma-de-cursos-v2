import { db } from "@/app/_lib/prisma";
import { Courses } from "@prisma/client";
import CourseDetailsPageClient from "./clientComponent";

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
    }) as Courses

    return(
        <>
            <CourseDetailsPageClient key={courses?.id} item={courses}/> 
        </>    
    )
}