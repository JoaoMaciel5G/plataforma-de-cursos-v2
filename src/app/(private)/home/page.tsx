import CourseItems from "@/app/(home)/_components/CourseItems";
import { db } from "@/app/_lib/prisma";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Courses } from "@prisma/client";
import PlainSignature from "./_components/Plains";

const Home = async () => {
    const courses = await db.courses.findMany({})
    const plains = await db.plains.findMany({})

    return (
        <main className="flex flex-col items-center w-full">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold my-5 text-primary">Uma ampla variedade de cursos pra você</h2>
            </div>
            <Card className="w-4/5 px-5 py-6">
                <CardContent className="text-center">
                    <CardHeader>
                        <CardTitle className="text-2xl">Amplie suas oportunidades de carreira com o desenvolvimento web</CardTitle>
                    </CardHeader>
                    <CardDescription className="text-md">
                        Se você quer se tornar um programador melhor, um lider melhor, melhorar capacidades de lógica de programação, melhorar seu linkedin e se tornar um profissional indispensável, a Pro Tech pode te proporcinar tudo isso e muito mais, venha com a gente e conheça nossos cursos
                    </CardDescription>
                </CardContent>
            </Card>
            <div className="flex w-full justify-between py-12">
                {
                    courses.map((item: Courses)=>(
                        <div key={item.id}>
                            <CourseItems courses={item}/> 
                        </div>
                    ))
                }
            </div>
            <section>
                <div>
                    <h2 className="text-3xl font-extrabold my-5 text-primary text-center">Aproveite nossos planos</h2>
                </div>
                <PlainSignature plains={plains}/>
            </section>
        </main>
    );
}
 
export default Home;