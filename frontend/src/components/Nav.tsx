import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Nav: FC = () => {
    return (
        <div>
            <h1>React Spring Boot Keycloak App</h1>
            <nav>
                <Link to="/">Home</Link> |{' '}
                <Link to="/dashboard">Dashboard</Link>
            </nav>
        </div>
    );
}

export default Nav;