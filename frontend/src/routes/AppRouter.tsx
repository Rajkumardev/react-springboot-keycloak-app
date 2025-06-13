import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Dashboard from "../components/Dashboard";

function AppRouter({ authenticated, token, keycloak }: { readonly authenticated: boolean; readonly token: string; readonly keycloak: any }) {
    return (
        <Routes>
            <Route path="/" element={<Home keycloak={keycloak}/>} />
            <Route path="/dashboard" element={authenticated ? <Dashboard token={token} /> : <p>Please login to view dashboard.</p>} />
        </Routes>
    );
}

export default AppRouter;
