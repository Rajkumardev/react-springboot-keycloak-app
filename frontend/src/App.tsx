import React, { useEffect, useState } from 'react';
import Keycloak from 'keycloak-js';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/AppRouter';

const keycloak = new Keycloak({
    url: process.env.REACT_APP_KEYCLOAK_URL!,
    realm: process.env.REACT_APP_KEYCLOAK_REALM ?? (() => { throw new Error('REACT_APP_KEYCLOAK_REALM is not defined'); })(),
    clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID ?? (() => { throw new Error('REACT_APP_KEYCLOAK_CLIENT_ID is not defined'); })(),
});


const App: React.FC = () => {
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [token, setToken] = useState<string>('');

    useEffect(() => {
        keycloak.init({ onLoad: 'login-required' })
            .then(auth => {
                setAuthenticated(auth);
                if (auth) setToken(keycloak.token || '');
            })
            .catch((error: unknown) => {
                console.error('Keycloak initialization failed:', error);
            });
    }, []);
    
    return (
        <Router>            
            <AppRouter authenticated={authenticated} token={token} keycloak={keycloak}/>
        </Router>
    );
};

export default App;