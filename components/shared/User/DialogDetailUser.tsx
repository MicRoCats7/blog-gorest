import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { User } from "@/types";

interface DialogUserProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    user: User | null;
}

export function DialogDetailUser({ open, setOpen, user }: DialogUserProps) {
    if (!user) return null;

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="md:max-w-[525px] max-w-[380px]">
                <DialogHeader>
                    <DialogTitle>Detail User</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4 py-4">
                    <label className="text-gray-500">Name  :</label>
                    <p className="text-black font-medium">{user.name}</p>
                    <label className="text-gray-500">Email :</label>
                    <p className="text-black font-medium">{user.email}</p>
                    <label className="text-gray-500">Gender :</label>
                    <p className="text-black capitalize font-medium">{user.gender}</p>
                    <label className="text-gray-500">Status :</label>
                    <div className={`rounded-full text-center px-2 py-1 text-white ${user.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}>
                        <span className="capitalize font-medium">{user.status}</span>
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        className="bg-transparent text-black border-[1px] border-black hover:bg-black hover:text-white rounded-full w-full sm:w-auto"
                        onClick={() => setOpen(false)}
                    >
                        Close
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
