import { Button } from "@/components/ui/button";
import { SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { LogIn, UserCircle } from "lucide-react";
import Link from "next/link";

const SideMenu = () => {
    return (
        <>
            <SheetHeader className="py-6">
                <SheetTitle className="text-left text-2xl">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4">
                <Button variant="secondary">
                    <LogIn/>
                    <Link href="#" className="px-2 text-xl">Cadastre-se</Link>
                </Button>
                <Button variant="secondary">
                    <UserCircle/>
                    <Link href="#" className="px-2 text-xl">Login</Link>
                </Button>
            </div>
        </>
    );
}
 
export default SideMenu;