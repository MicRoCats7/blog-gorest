import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { deleteUser, fetchUsers } from "@/service/api";
import { User } from "@/types";
import { toast } from "react-toastify";

interface DialogDeleteProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    setData: (data: any) => void;
    page: number;
    user: User | null;
}

export function DialogDelete({ open, setOpen, setData, page, user }: DialogDeleteProps) {
    const handleSubmit = async () => {
        try {
            if (user) {
                await deleteUser(user.id);
                setOpen(false);
                toast.error("Deleted successfully");

                // Mengambil ulang data pengguna setelah penambahan user
                const response = await fetchUsers(page);
                setData(response.data);
            }
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="md:max-w-[350px] max-w-[380px]">
                <DialogHeader>
                    <DialogTitle>Delete User</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete this user?
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-row items-center justify-center gap-3 w-full mt-14">
                    <Button
                        className="bg-transparent text-black border-[1px] border-black hover:bg-red-500 hover:border-0 hover:text-white rounded-full w-full"
                        onClick={handleSubmit}
                    >
                        Delete User
                    </Button>
                    <Button
                        className="bg-transparent text-black border-[1px] border-black hover:bg-black hover:text-white rounded-full w-full"
                        onClick={() => setOpen(false)}
                    >
                        Cancel
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
