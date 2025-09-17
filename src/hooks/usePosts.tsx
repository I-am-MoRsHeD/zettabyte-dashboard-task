/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

export const usePosts = () => {
    const [data, setData] = useState<any[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch("https://jsonplaceholder.typicode.com/posts");

                if (!res.ok) {
                    throw new Error("Failed to fetch posts");
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
