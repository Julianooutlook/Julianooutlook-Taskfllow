import React from 'react';
import { useNavigate } from "react-router-dom";
import { StyledLogoutButton, } from '../styles/Dashboard.js';
import { StyledErrorMessage } from '../styles/GlobalStyles.js';


export function Logout() {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <StyledLogoutButton 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleLogout}>
            Sair
        </StyledLogoutButton>
    );
}

export function ErrorMessage({ children }) {
    return <StyledErrorMessage>{children}</StyledErrorMessage>
}