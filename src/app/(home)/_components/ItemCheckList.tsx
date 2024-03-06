import { Check } from "lucide-react";

const ItemCheckList = ({children}: {children: string}) => {
    return (
        <div className="flex my-4">
            <Check className="text-primary mx-2"/>
            <p className="text-white">{children}</p>
        </div>
    );
}
 
export default ItemCheckList;