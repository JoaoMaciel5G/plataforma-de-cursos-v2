import { Star } from "lucide-react";

const StarCheckList = ({children}: {children: string}) => {
    return (
        <div className="flex my-4">
            <Star className="text-yellow-500 mx-2"/>
            <p className="text-white">{children}</p>
        </div>
    );
}
 
export default StarCheckList;