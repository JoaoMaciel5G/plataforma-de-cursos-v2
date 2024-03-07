import { Button } from "@/components/ui/button";
import selo from "../../../../public/selo-garantia.png"
import Image from "next/image";

const Guaranty = () => {
    return (
            <>
                <div>
                    <div>
                        <h2 className="font-bold text-2xl my-4 text-center">Experimente por 7 dias</h2>
                    </div>
                    <div>
                        <p className="text-lg my-3">Para que você possa aproveitar 100% de tudo isso você está coberto pela garantia</p>
                        <div>
                            <ul>
                                <li className="text-lg font-semibold my-2">1.Garantia de todo seu dinheiro de volta</li>
                                <li className="text-lg font-semibold my-2">2.Garantia dos cursos totalmente atualizados</li>
                                <li className="text-lg font-semibold my-2">3.Garantia de suporte premium</li>
                            </ul>
                        </div>
                        <p className="text-lg">Com esta garantia você terá a certeza de ter feito o seu melhor investimento em um curso, um curso atualizado e recebendo sempre o melhor suporte.</p>
                    </div>
                    <div className="flex justify-center my-7">
                        <Button className="bg-primary rounded-md w-full text-lg font-semibold py-7">Quero ser um programador 11 estrelas</Button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Image className="w-[435px] h-[435px] md:h-[300px] md:w-[300px]" height={0} width={0} src={selo} alt="selo de garantia de sete dias"/>
                </div>
            </>
    );
}
 
export default Guaranty;