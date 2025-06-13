import React, { useEffect, useState } from 'react'; 
import Nav from './Nav';

interface DashboardProps {
    token: string;
}

const Dashboard: React.FC<DashboardProps> = ({ token }) => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        if (token) {
            fetch(`${process.env.REACT_APP_API_URL}/api/private/hello`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(async res => {
                    const data = await res.text();
                    console.log('API response:', data);
                    return data;
                })
                .then(setData)
                .catch(console.error);
        }
    }, [token]);

    return (
        <div>
            <Nav />
            <h2>Dashboard</h2>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
        </div>
    );
};

export default Dashboard;
