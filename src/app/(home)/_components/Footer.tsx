import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-6 px-2 flex flex-col gap-y-8 justify-around md:flex-row">
            <div className="px-4 lg:w-1/2">
                <label htmlFor="email" className="font-semibold text-lg">Fique por dentro</label>
                <div>
                    <form className="flex my-2 gap-3 items-center">
                        <input type="email" id="email" placeholder="Seu endereço de email" className="py-3 outline-none px-4 w-full text-black rounded-lg text-lg placeholder:font-semibold" />
                        <Button type="submit" className="w-[70px] h-[50px]">
                            <Send size={30} />
                        </Button>
                    </form>
                </div>
                <div className="flex items-center px-2">
                    <div>
                        <input type="checkbox" id="check"/>
                    </div>
                    <label htmlFor="check" className="font-semibold px-2">Quero receber emails e novidades de cursos e promoções novas e concordo com os termos de privacidade</label>
                </div>
            </div>
            <div className="text-center md:text-left">
                <h2 className="font-semibold text-lg pb-3">Cursos Online</h2>
                <p className="text-zinc-500 cursor-pointer">Arquitetura de Software</p>
                <p className="text-zinc-500 cursor-pointer">Design Patterns</p>
                <p className="text-zinc-500 cursor-pointer">Inglês</p>
                <p className="text-zinc-500 cursor-pointer">Linkedin</p>
                <p className="text-zinc-500 cursor-pointer">Soft Skills</p>
            </div>
            <div className="text-center md:text-left">
                <h2 className="font-semibold text-lg pb-3">Categorias</h2>
                <p className="text-zinc-500 cursor-pointer">Competencias pessoais</p>
                <p className="text-zinc-500 cursor-pointer">Produtividade</p>
                <p className="text-zinc-500 cursor-pointer">Gestão e trabalho em equipe</p>
                <p className="text-zinc-500 cursor-pointer">Liderança positiva</p>
            </div>
        </footer>
    );
}

export default Footer;