import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { LogInIcon, UserIcon, LogOutIcon, HomeIcon, CalendarIcon} from "lucide-react";
import Link from "next/link";

const SideMenu = () => {
    return (
        <>
            <SheetHeader className="py-6">
                <SheetTitle className="text-left text-2xl">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 py-6">
                <div className="flex gap-3 items-center">
                    <UserIcon size={32}/>
                    <h2 className="font-bold">Olá, faça seu login</h2>
                </div>
                <Button variant="secondary" className="w-full">
                    <LogInIcon className="mr-3" size={18}/>
                    Fazer Login
                </Button>
            </div>
            {/* <div className="flex justify-between items-center">
                <div className="flex items-center gap-3 py-6">
                    <Avatar>
                        <AvatarImage src=""/>
                        <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                    <h2 className="font-bold text-lg">Olá, Miguel</h2>
                </div>
                <Button  variant="secondary" size="icon">
                    <LogOutIcon/>
                </Button>
            </div> */}

            <div className="flex flex-col gap-3">
                <Button variant="outline" className="justify-start" asChild>
                    <Link href="/">
                        <HomeIcon size={18} className="mr-3"/>
                        Inicio
                    </Link>
                </Button>
                {/* <Button variant="outline" className="justify-start" asChild>
                    <Link href="/bookings">
                        <CalendarIcon size={18} className="mr-3"/>
                        Agendamentos
                    </Link>
                </Button> */}
            </div>
        </>
    );
}
 
export default SideMenu;