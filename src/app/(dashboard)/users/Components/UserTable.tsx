"use client";

import { IUser } from "@/types";
import { motion } from "framer-motion";
import React from "react";

interface UserTableProps {
    users: IUser[];
    onRowClick?: (user: IUser) => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, onRowClick }) => {
    return (
        <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full bg-white">
                <thead className="bg-gray-100 text-left text-sm text-gray-600">
                    <tr>
                        <th className="px-6 py-3 font-medium">Name</th>
                        <th className="px-6 py-3 font-medium">Email</th>
                        <th className="px-6 py-3 font-medium">Company</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <motion.tr
                            key={user.id}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="border-t hover:bg-orange-50 cursor-pointer transition-colors"
                            onClick={() => onRowClick?.(user)}
                        >
                            <td className="px-6 py-4 text-gray-800">{user.name}</td>
                            <td className="px-6 py-4 text-gray-600">{user.email}</td>
                            <td className="px-6 py-4 text-gray-500">{user.company.name}</td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
