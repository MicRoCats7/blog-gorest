'use client';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "../../ui/button";
import { useEffect, useState } from "react";
import { User } from "@/types";
import { fetchUsers } from "@/service/api";
import PaginationList from "../Pagination";
import { ButtonTableUser } from "./ButtonTableUser";
import { DialogNewUser } from "./DialogNewUser";
import { DialogDetailUser } from "./DialogDetailUser";
import { DialogEditUser } from "./DialogEditUser";
import { DialogDelete } from "./DialogDelete";
import { Input } from "@/components/ui/input";

export function TableUser() {
    const [data, setData] = useState<User[]>([]);
    const [filteredData, setFilteredData] = useState<User[]>([]);
    const [page, setPage] = useState<number>(1);
    const [hasNextPage, setHasNextPage] = useState<boolean>(true);
    const [openNewUserDialog, setOpenNewUserDialog] = useState<boolean>(false);
    const [openDetailUserDialog, setOpenDetailUserDialog] = useState<boolean>(false);
    const [openEditDialog, setOpenEditDialog] = useState<boolean>(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const getUsers = async () => {
        try {
            const response = await fetchUsers(page);
            if (response.data.length < page) {
                setHasNextPage(false);
            } else {
                setHasNextPage(true);
            }
            setData(response.data);
            setFilteredData(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        if (query === "") {
            setFilteredData(data);
        } else {
            const filtered = data.filter((user) =>
                user.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredData(filtered);
        }
    };

    const handleDetailClick = (user: User) => {
        setSelectedUser(user);
        setOpenDetailUserDialog(true);
    };

    const handleEditClick = (user: User) => {
        setSelectedUser(user);
        setOpenEditDialog(true);
    };

    const handleDeleteClick = (user: User) => {
        setSelectedUser(user);
        setOpenDeleteDialog(true);
    };

    useEffect(() => {
        getUsers();
    }, [page]);

    return (
        <>
            <div className="flex md:flex-row flex-col gap-5">
                <Button
                    className="bg-transparent text-black border-[1px]
               border-black hover:bg-black hover:text-white
               rounded-full md:w-auto w-full"
                    onClick={() => setOpenNewUserDialog(true)}
                >
                    Add New User
                </Button>
                <Input
                    placeholder="Search name"
                    className="rounded-full pl-7"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>No</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Gender</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredData.map((user, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{index + 1}</TableCell>
                            <TableCell className="font-medium">{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell className="capitalize">{user.gender}</TableCell>
                            <TableCell>
                                <div
                                    className={`${user.status === 'active'
                                        ? 'bg-green-500'
                                        : 'bg-red-500'
                                        } rounded-full px-2 py-1 text-white`}
                                >
                                    <span className="capitalize">{user.status}</span>
                                </div>
                            </TableCell>
                            <TableCell className="text-right">
                                <ButtonTableUser
                                    onDetailClick={() => handleDetailClick(user)}
                                    onEditClick={() => handleEditClick(user)}
                                    onDeleteClick={() => handleDeleteClick(user)}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <PaginationList currentPage={page} onPageChange={setPage} hasNextPage={hasNextPage} />
            <DialogNewUser
                open={openNewUserDialog}
                setOpen={setOpenNewUserDialog}
                setData={setFilteredData}
                page={page}
            />
            <DialogDetailUser
                open={openDetailUserDialog}
                setOpen={setOpenDetailUserDialog}
                user={selectedUser}
            />
            <DialogEditUser
                open={openEditDialog}
                setOpen={setOpenEditDialog}
                setData={setFilteredData}
                page={page}
                user={selectedUser}
            />
            <DialogDelete
                open={openDeleteDialog}
                setOpen={setOpenDeleteDialog}
                setData={setFilteredData}
                page={page}
                user={selectedUser}
            />
        </>
    );
}
