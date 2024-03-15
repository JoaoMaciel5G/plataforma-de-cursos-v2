import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Courses } from "@prisma/client";
import Image from "next/image"
import Link from "next/link";

const CourseItems = ({courses}: {courses: Courses}) => {
    return (
        <Card className="min-w-[168px] max-w-[168px]">
            <CardContent className="p-4">
                <Link href={`courses/${courses.id}`}>
                    <Image priority={false} height={0} width={0} sizes="100vw" className="h-[159px] w-full rounded-2xl" key={courses.id} src={courses.imageUrl} alt={courses.title}/>
                    <CardTitle className="text-md overflow-hidden text-ellipsis text-nowrap">{courses.title}</CardTitle>
                </Link>
            </CardContent>
        </Card>
    );
}
 
export default CourseItems;