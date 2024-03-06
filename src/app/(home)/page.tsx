import Header from "../_components/Header";
import Presentation from "./_components/Presentation";
import CourseItems from "./_components/CourseItems";
import { db } from "../_lib/prisma";

export default async function Home() {
  const courses = await db.courses.findMany({})
  return (
    <>
      <Header/>
      <main className="mx-3">
          <Presentation/>
          <section className="my-14">
              <div className="text-center">
                  <h2 className="font-bold text-2xl my-4 uppercase">Os melhores cursos você encontra aqui</h2>
              </div>
              <div className="flex select-none justify-between gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
                {
                    courses.map((item)=>(
                      <div key={item.id}>
                        <CourseItems courses={item}/> 
                      </div>
                    ))
                }
              </div>
          </section>
      </main>
    </>
    
  );
}
