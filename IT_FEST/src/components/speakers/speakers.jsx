import React, { useEffect, useState } from 'react';
import axios from 'axios';

const speakers = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Specify your API URL
        const fetchData = async () => {
            try {
                const response = await axios.get('http://217.151.230.35:199/api/info/speakers/');
                setData(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.information}</p>
                    <img src={item.photo}/>
                </div>
            ))}
        </div>
    );
};

export default speakers;

