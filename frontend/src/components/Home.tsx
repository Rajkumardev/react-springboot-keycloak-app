import React, { FC } from 'react';
import Nav from './Nav';

interface HomeProps {
    keycloak: any;
}

const Home: FC<HomeProps> = ({ keycloak }) => {
    const authenticated = keycloak?.authenticated;

    const login = () => {
        keycloak.login();
    };

    const logout = () => {
        keycloak.logout();
    };

    return (
        <div>
            <h2>Home</h2>
            <p>Welcome to the React Spring Boot Keycloak App!</p>
            <div>
                <Nav />
                {authenticated ? (
                    <div>
                        <p>Welcome, <b>{keycloak.tokenParsed?.name}!</b></p>
                        <button onClick={logout}>Logout</button>
                    </div>
                ) : (
                    <button onClick={login}>Login</button>
                )}
            </div>
        </div>
    );
};

export default Home;