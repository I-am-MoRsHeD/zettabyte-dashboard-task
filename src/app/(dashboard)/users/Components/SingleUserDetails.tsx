import { IUser } from "@/types";
import Link from "next/link";
import React from "react";

const SingleUserDetails = ({ user }: { user: IUser }) => {
    return (
        <div className="space-y-4 text-gray-700">
            <div>
                <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
                <p className="text-sm text-gray-500">@{user.username}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <p>
                    <span className="font-medium">Email:</span> {user.email}
                </p>
                <p>
                    <span className="font-medium">Phone:</span> {user.phone}
                </p>
                <p>
                    <span className="font-medium">Website:</span>{" "}
                    <Link
                        href={`https://${user.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:underline"
                    >
                        {user.website}
                    </Link>
                </p>
            </div>
            <div>
                <h4 className="text-sm font-semibold text-gray-800 mb-1">Address</h4>
                <p className="text-sm">
                    {user.address.street}, {user.address.suite}, {user.address.city},{" "}
                    {user.address.zipcode}
                </p>
                <p className="text-xs text-gray-500">
                    (Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng})
                </p>
            </div>
            <div>
                <h4 className="text-sm font-semibold text-gray-800 mb-1">Company</h4>
                <p className="text-sm">{user.company.name}</p>
                <p className="text-xs italic text-gray-500">&quot;{user.company.catchPhrase}&quot;</p>
                <p className="text-xs text-gray-400">{user.company.bs}</p>
            </div>
        </div>
    );
};

export default SingleUserDetails;
