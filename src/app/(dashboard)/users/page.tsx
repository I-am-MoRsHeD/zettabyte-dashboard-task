"use client";

import { useState } from "react";
import { useUsers } from "@/hooks/useUsers";
import UserTable from "./Components/UserTable";
import { IUser } from "@/types";
import Modal from "./Components/Modal";
import SingleUserDetails from "./Components/SingleUserDetails";

export default function UsersPage() {
    const { data: users, loading, error } = useUsers();

    const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-gray-500 animate-pulse">Loading users...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div className="p-8 space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Users</h1>

            {users && (
                <UserTable users={users} onRowClick={(user) => setSelectedUser(user)} />
            )}

            <Modal
                isOpen={!!selectedUser}
                onClose={() => setSelectedUser(null)}
            >
                {selectedUser && <SingleUserDetails user={selectedUser} />}
            </Modal>
        </div>
    );
}
