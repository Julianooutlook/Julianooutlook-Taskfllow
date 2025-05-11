import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../axios.js';
import { StyledDivLogin, StyledH2, StyledDivInputs, StyledInputs, StyledForm, StyledButtonRegister, StyledDivInputsRegister } from '../styles/GlobalStyles.js';
import { GlobalStyle } from '../styles/GlobalStyles';
import  ReturningLogin  from '../components/ReturningLogin.jsx';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await api.post('/register', { name, email, password });
            navigate('/login');
        } catch (error) {
            if (error.response && error.response.status === 409) {
                alert('E-mail já está em uso. Tente outro.');
            } else {
                alert('Erro ao registrar. Tente novamente mais tarde.')
            }
        }
    };

    return (
        <>
            <ReturningLogin />
            <GlobalStyle/>
            <StyledDivLogin>
                <StyledH2>Registrar</StyledH2>

                <StyledForm onSubmit={handleSubmit}>

                    <StyledDivInputsRegister>
                        <StyledInputs type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
                        <StyledInputs type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <StyledInputs type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </StyledDivInputsRegister>
            
                    <StyledButtonRegister type="submit">Registrar</StyledButtonRegister>
                </StyledForm>
            </StyledDivLogin>
        </>    
    );
};

export default Register;