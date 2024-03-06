import CheckListPresentation from "./CheckListPresentation";
import CheckListRightSide from "./CheckListRightSide";
import TextLists from "./TextLists";

const Presentation = () => {
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
                    <div className="flex justify-center my-4 ">
                        <a className="w-1/2 max-md:w-full"><button className="bg-primary rounded-md w-full text-purple text-lg font-semibold py-3">Quero ser um programador 11 estrelas</button></a>
                    </div>
                </div>
            </div>
            <CheckListRightSide/>
        </section>
    );
}
 
export default Presentation;