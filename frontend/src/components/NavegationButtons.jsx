import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, positionalKeys } from 'framer-motion';

const NavBar = styled.header`
    padding: 1rem 2rem;
    background-color: #1f2937;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`    
;

const Logo = styled.h1`
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
`
;

const NavButton = styled(motion.button)`
    background-color: #4caf50;
    color: white;
    padding: 0.6rem 1.2rem;
    font-size: none;
    border-radius: 8px;
    font-weight: 500;
    cursor: ponter;
    
    &:hover {
        background-color: #43a047;
    }
`
;

const TopNavBar = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/dashboard');
    };

    return (
        <NavBar>
            <Logo>TaskFlow</Logo>
            <NavButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBack}
            >
                Voltar para Tela inicial
            </NavButton>
        </NavBar>
    )
}

export default TopNavBar;