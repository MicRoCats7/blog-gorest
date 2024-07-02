import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectGender } from "../Bloglist/SelectGender";
import { useEffect, useState } from "react";
import { fetchUsers, updateUser } from "@/service/api";
import { User } from "@/types";
import { toast } from "react-toastify";

const genderOptions = [
    {
        label: 'Female',
        value: 'female'
    },
    {
        label: 'Male',
        value: 'male'
    }
];

const statusOptions = [
    {
        label: 'Active',
        value: 'active'
    },
    {
        label: 'Inactive',
        value: 'inactive'
    }
];

interface DialogEditUserProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    setData: (data: any) => void;
    page: number;
    user: User | null;
}

export function DialogEditUser({ open, setOpen, setData, page, user }: DialogEditUserProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [selectedGender, setSelectedGender] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");

    const handleGenderChange = (value: string) => {
        setSelectedGender(value);
    };

    const handleStatusChange = (value: string) => {
        setSelectedStatus(value);
    };

    const handleSubmit = async () => {
        try {
            const userData = {
                name,
                email,
                gender: selectedGender,
                status: selectedStatus,
            };

            if (user) {
                await updateUser(user.id, userData);
                setOpen(false);
                toast.success("Updated successfully");

                // Mengambil ulang data pengguna setelah penambahan user
                const response = await fetchUsers(page);
                setData(response.data);
            }
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    const handleCancel = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
            setSelectedGender(user.gender)
            setSelectedStatus(user.status)
        }
    }, [user]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="md:max-w-[525px] max-w-[380px]">
                <DialogHeader>
                    <DialogTitle>Edit User</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4 py-4">
                    <Label>Name</Label>
                    <Input
                        placeholder="Enter name"
                        className="col-span-3 outline-none"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Label>Email</Label>
                    <Input
                        type="email"
                        placeholder="Enter email"
                        className="col-span-3 outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="flex flex-row gap-3">
                        <div className="flex flex-col gap-4 w-full">
                            <Label>Gender</Label>
                            <SelectGender
                                options={genderOptions}
                                onChange={handleGenderChange}
                                value={selectedGender}
                            />
                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            <Label>Status</Label>
                            <SelectGender
                                options={statusOptions}
                                onChange={handleStatusChange}
                                value={selectedStatus}
                            />
                        </div>
                    </div>
                </div>
                <DialogFooter className="gap-4 md:gap-0">
                    <Button
                        className="bg-transparent text-black border-[1px] border-black hover:bg-black hover:text-white rounded-full w-full sm:w-auto"
                        onClick={handleSubmit}
                    >
                        Update User
                    </Button>
                    <Button
                        className="bg-transparent text-black border-[1px] border-black hover:bg-black hover:text-white rounded-full w-full sm:w-auto"
                        onClick={handleCancel}
                    >
                        Cancel
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
