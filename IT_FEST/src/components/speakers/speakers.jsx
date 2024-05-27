import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './speakersModule.css'; // Ensure to import the CSS file

const Speakers = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
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
        <div className='speakers'>
            <div className="container">
                <h1 className="text-center" id="festival-sections">
                    Опытные специалиасты
                    приглашённые на фестиваль
                </h1>
            </div>
            <div className="speakers-grid">
                {data.map((item) => (
                    <div key={item.id} className="speaker-card">
                        <img src={item.photo} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>{item.information}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Speakers;
