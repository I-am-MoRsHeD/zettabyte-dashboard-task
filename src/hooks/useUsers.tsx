/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUser } from "@/types";
import { useEffect, useState } from "react";

export const useUsers = () => {
    const [data, setData] = useState<IUser[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const res = await fetch("https://jsonplaceholder.typicode.com/users");

                if (!res.ok) {
                    setError("Failed to fetch users");
                }

                const json = await res.json();
                setData(json);
            } catch (err: any) {
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};
