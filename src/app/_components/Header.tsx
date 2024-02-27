import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { LogIn, MenuIcon, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SideMenu from "./SideMenu";

const Header = () => {
    return (
        <header className="flex justify-between items-center px-4 h-28">
            <div>
                <Link href="/">
                    <h2 className="text-3xl font-bold">Pro Tech Cursos</h2>
                </Link>
            </div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="secondary" size="icon">
                        <MenuIcon/>
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SideMenu/>
                </SheetContent>
            </Sheet>
        </header>
    );
}
 
export default Header;