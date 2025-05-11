import { useNavigate } from "react-router-dom";
import React from 'react';
import { StyledLogoutButton, } from '../styles/Dashboard.js';

export function BackToHome() {
    const navigate = useNavigate();

    function handleBackHome() {
        navigate('/');
    }

    return (
        <StyledLogoutButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleBackHome}>
            Voltar a Home
        </StyledLogoutButton>
    );
};