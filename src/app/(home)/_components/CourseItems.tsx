"use client"

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface CourseItemsProps {
    price: string;
    id: string;
    title: string;
    imageUrl: string;
    description: string
}

const CourseItems = ({courses}: {courses: CourseItemsProps}) => {
    const {data} = useSession()
    const router = useRouter()

    const handleToaster = () => {
            toast("Para acessar os cursos, você precisa estar logado!", {
                action: {
                    label: "Fazer Login",
                    onClick: () => signIn("google")
                }
            })
    }
    
    const handleRouter = () => {
        router.push(`/courses/${courses.id}`) 
    }

    return (
        <Card className="min-w-[168px] max-w-[168px] cursor-pointer mx-3" onClick={data?.user ? handleRouter : handleToaster}>
            <CardContent className="p-4">
                <div>
                    <Image priority={false} height={0} width={0} sizes="100vw" className="h-[159px] w-full rounded-2xl" key={courses.id} src={courses.imageUrl} alt={courses.title}/>
                    <CardTitle className="text-md overflow-hidden text-ellipsis text-nowrap">{courses.title}</CardTitle>
                </div>
            </CardContent>
        </Card>
    );
}
 
export default CourseItems;