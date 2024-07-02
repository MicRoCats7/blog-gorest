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
import { useState } from "react";
import { createUser, fetchUsers } from "@/service/api";
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

interface DialogUserProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    setData: (data: any) => void;
    page: number;
}

export function DialogNewUser({ open, setOpen, setData, page }: DialogUserProps) {
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

    async function handleSubmit() {
        try {
            const userData = {
                name,
                email,
                gender: selectedGender,
                status: selectedStatus
            };

            await createUser(userData);
            setName("");
            setEmail("");
            setSelectedGender("");
            setSelectedStatus("");
            setOpen(false);
            toast.success("User added successfully");

            // Mengambil ulang data pengguna setelah penambahan user
            const response = await fetchUsers(page);
            setData(response.data);
        } catch (error) {
            console.error("Error adding user:", error);
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="md:max-w-[525px] max-w-[380px]">
                <DialogHeader>
                    <DialogTitle>Add New User</DialogTitle>
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
                                value=""
                            />
                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            <Label>Status</Label>
                            <SelectGender
                                options={statusOptions}
                                onChange={handleStatusChange}
                                value=""
                            />
                        </div>
                    </div>
                </div>
                <DialogFooter className="gap-4 md:gap-0">
                    <Button
                        onClick={handleSubmit}
                        className="bg-transparent text-black border-[1px] border-black hover:bg-black hover:text-white rounded-full w-full sm:w-auto"
                    >
                        Add User
                    </Button>
                    <Button
                        className="bg-transparent text-black border-[1px] border-black hover:bg-black hover:text-white rounded-full w-full sm:w-auto"
                        onClick={() => setOpen(false)}
                    >
                        Cancel
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
