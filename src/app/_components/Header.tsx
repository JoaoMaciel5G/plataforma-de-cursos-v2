import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon} from "lucide-react";
import { Button } from "@/components/ui/button";
import SideMenu from "./SideMenu";

const Header = () => {
    return (
        <header className="flex justify-between items-center px-6 h-28 border-b border-solid border-secondary">
            <div>
                <Link href="/">
                    <h2 className="text-3xl font-bold">Pro Tech Cursos</h2>
                </Link>
            </div>
            <Sheet>
                <SheetTrigger asChild>
                    <div className="flex items-center gap-3">
                        <h2>Menu</h2>
                        <Button variant="secondary" size="icon">
                            <MenuIcon/>
                        </Button>
                    </div>
                </SheetTrigger>
                <SheetContent>
                    <SideMenu/>
                </SheetContent>
            </Sheet>
        </header>
    );
}
 
export default Header;