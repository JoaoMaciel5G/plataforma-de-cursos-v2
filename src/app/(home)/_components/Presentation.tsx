"use client"

import { Button } from "@/components/ui/button";
import CheckListPresentation from "./CheckListPresentation";
import CheckListRightSide from "./CheckListRightSide";
import TextLists from "./TextLists";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { signIn, useSession } from "next-auth/react";

const Presentation = () => {
    const router = useRouter()
    const {data} = useSession()
    
    const handleToaster = () => {
        toast("Para acessar os cursos, você precisa estar logado!", {
            action: {
                label: "Fazer Login",
                onClick: () => signIn("google")
            }
        })
    }

    const handleRouter = () => {
        router.push(`/home`) 
    }
    return (
        <section className="flex flex-col xl:flex-row xl:justify-around mx-3">
            <div className="xl:w-1/2 p-10">
                <div>
                    <div>
                        <h2 className="font-semibold text-3xl my-4 text-center">Sua jornada como um novo programador</h2>
                    </div>
                    <TextLists/>
                </div>
                <div>
                    <div className="my-8">
                        <h2 className="text-3xl font-semibold text-center">Transforme os seus sonhos em realidade com a programação</h2>
                    </div>
                    <CheckListPresentation>Se destaque no mercado de trabalho com o módulo de Linkedin e curriculo</CheckListPresentation>
                    <CheckListPresentation>Seja um programador acima da média, com as técnicas e arquitetura de software que será ensinado</CheckListPresentation>
                    <CheckListPresentation>Aprenda as tecnologias mais atuais requisitadas no mercado de tecnologia</CheckListPresentation>
                    <CheckListPresentation>Aprenda soft-skills e se detaque em entrevistas, e se torne um funcionário indispensável</CheckListPresentation>
                    <div className="flex justify-center my-4">
                        <Button onClick={data?.user ? handleRouter : handleToaster} className="bg-primary rounded-md w-[400px] text-lg font-semibold py-6">Quero ser um programador 11 estrelas</Button>
                    </div>
                </div>
            </div>
            <CheckListRightSide/>
        </section>
    );
}
 
export default Presentation;