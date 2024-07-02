import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { BiSolidDetail } from "react-icons/bi";
import { GoPencil, GoTrash } from "react-icons/go";

interface ButtonTableUserProps {
    onDetailClick: () => void;
    onEditClick: () => void;
    onDeleteClick: () => void;
}

export function ButtonTableUser({ onDetailClick, onEditClick, onDeleteClick }: ButtonTableUserProps) {
    return (
        <TooltipProvider>
            <div className="flex items-end justify-end gap-2">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            className="bg-transparent text-black border-[1px]
                                   border-black hover:bg-black hover:text-white
                                   rounded-full w-full sm:w-fit p-2"
                            onClick={onDetailClick}
                        >
                            <BiSolidDetail size={20} />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Detail</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            className="bg-transparent text-black border-[1px]
                                   border-black hover:bg-black hover:text-white
                                   rounded-full w-full sm:w-fit p-2"
                            onClick={onEditClick}
                        >
                            <GoPencil size={20} />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Edit User</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            className="bg-transparent text-black border-[1px]
                                   border-black hover:bg-black hover:text-white
                                   rounded-full w-full sm:w-fit p-2"
                            onClick={onDeleteClick}
                        >
                            <GoTrash size={20} />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Delete User</p>
                    </TooltipContent>
                </Tooltip>
            </div>
        </TooltipProvider>
    );
}
