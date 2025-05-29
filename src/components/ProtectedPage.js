import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../components/AuthProvider"; // Import AuthContext

const ProtectedPage = () => {
    const { fetchProtectedData } = useContext(AuthContext); // Get fetch function from context
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const result = await fetchProtectedData();
            setData(result);
            setLoading(false);
        };

        fetchData();
    }, [fetchProtectedData]); // Re-run if fetch function changes

    return (
        <div>
            <h2>Protected Data</h2>
            {loading ? <p>Loading...</p> : data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>No data available.</p>}
        </div>
    );
};

export default ProtectedPage;
