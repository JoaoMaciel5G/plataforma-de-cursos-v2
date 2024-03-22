import { db } from "@/app/_lib/prisma";
import PlainClientComponent from "./clientComponent";

const Plains = async () => {
    const plains = await db.plains.findMany({})

    return (
        <section>
            <div className="my-4 flex flex-col justify-center items-center">
                <div className="py-6">
                    <h2 className="text-4xl font-semiold text-primary text-center">Planos de assinatura</h2>
                </div>
                <div className="flex gap-y-8 flex-col xl:flex-row xl:justify-around xl:w-full">
                    {
                        plains.map((plain)=>{
                            const plainData = {
                                ...plain,
                                price: plain.price.toString(),
                                discountPrince: plain.discountPrince.toString()
                            }

                            return (
                                <PlainClientComponent key={plainData.id} plains={plainData}/> 
                            )
                        })
                    }
                </div>
            </div>
        </section> 
    )
}
 
export default Plains;