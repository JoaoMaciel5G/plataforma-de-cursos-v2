import Header from "../_components/Header";
import Presentation from "./_components/Presentation";
import CourseItems from "./_components/CourseItems";
import { db } from "../_lib/prisma";
import Suport from "./_components/Suport";
import Guaranty from "./_components/Guaranty";
import Footer from "./_components/Footer";

export default async function Home() {
  const courses = await db.courses.findMany({})
  
  return (
    <>
      <Header/>
      <main>
          <Presentation/>
          <section className="my-14 mx-3">
              <div className="text-center">
                  <h2 className="font-bold text-2xl my-4 uppercase">Os melhores cursos você encontra aqui</h2>
              </div>
              <div className="flex select-none justify-between gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
                {
                    courses.map((item)=>{
                          const productData = {
                            ...item,
                            price: item.price.toString(),
                          };
                          
                          return(
                            <div key={item.id}>
                                <CourseItems courses={productData}/> 
                            </div>
                          )
                    })
                }
              </div>
          </section>
          <Suport/>
          <section className="flex flex-col my-6 py-10 px-5 justify-between md:flex-row">
            <Guaranty/>
          </section>
          <Footer/>
      </main>
    </>
  );
}
