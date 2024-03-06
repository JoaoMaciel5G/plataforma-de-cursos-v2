import Link from "next/link";
import StarCheckList from "./StarCheckList";
import ItemCheckList from "./ItemCheckList";
import { Button } from "@/components/ui/button";

const CheckListRightSide = () => {
    return (
        <div className="flex justify-center items-center xl:w-1/2">
            <div className="p-10 bg-secondary rounded-xl xl:w-[500px]">
                <h2 className="font-semibold text-2xl">O que você vai receber</h2>
                <div>
                    <StarCheckList>Nova trilha de Inteligência artificial: desenvolvimento de IA</StarCheckList>
                    <StarCheckList>Acesso imediato a TODOS os programas da plataforma</StarCheckList>
                    <ItemCheckList>Metodologia validada por + de 51 mil alunos</ItemCheckList>
                    <ItemCheckList>Aulas gravadas pra assistir no seu ritmo</ItemCheckList>
                    <ItemCheckList>Novas atualizações e conteúdos todos os mese</ItemCheckList>
                    <ItemCheckList>Renove o segundo ano de assinatura pelo mesmo preço ao final do acesso</ItemCheckList>
                    <ItemCheckList>Diversos certificados e mais de 76 projetos e desafios práticos</ItemCheckList>
                    <ItemCheckList>7 dias de Garantia</ItemCheckList>
                </div>
                <Button className="w-full flex justify-center bg-primary rounded-lg text-lg tracking-wider py-8">
                    Quero Assinar
                </Button>
                <p className="text-center text-white pt-10 font-semibold text-xl text-black">Desconto de R$ 100 no plano mensal</p>
            </div>
        </div>
    );
}
 
export default CheckListRightSide;