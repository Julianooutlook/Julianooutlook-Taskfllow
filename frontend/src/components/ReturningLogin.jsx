import React from 'react';
import { useNavigate } from "react-router-dom";
import { StyledLogoutButton, } from '../styles/Dashboard.js';


const ReturningLogin = () => {
    const navigate = useNavigate();

    function handleLogout() {
        navigate('/login');
    }

    return (
        <StyledLogoutButton 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleLogout}>
            Voltar ao login
        </StyledLogoutButton>
    );
}

export default ReturningLogin;