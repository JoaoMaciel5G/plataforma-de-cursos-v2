import { Card, CardContent } from "@/components/ui/card";
import { Courses } from "@prisma/client";
import Image from "next/image"

const CourseItems = ({courses}: {courses: Courses}) => {
    return (
        <Card className="min-w-[168px] max-w-[168px]">
            <CardContent className="p-4">
                <div>
                    <Image priority={false} height={0} width={0} sizes="100vw" className="h-[159px] w-full rounded-2xl" key={courses.id} src={courses.imageUrl} alt={courses.title}/>
                </div>
            </CardContent>
        </Card>
    );
}
 
export default CourseItems;