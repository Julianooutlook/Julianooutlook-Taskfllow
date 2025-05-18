import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../axios.js';
import { StyledButton, StyledDivLogin, StyledH2, StyledDivInputs, StyledInputs, StyledForm, StyledButtonRegister } from '../styles/GlobalStyles.js';
import { StyledErrorMessage } from '../styles/GlobalStyles.js';
import { GlobalStyle } from '../styles/GlobalStyles.js';
import { BackToHome } from '../components/BackToHome.jsx';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');
    


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await api.post('/login', { email, password });
            
            const userData = response.data;
    
            localStorage.setItem('token', userData.token);
            localStorage.setItem('usuario', JSON.stringify(userData.user));
            // localStorage.setItem('user', userData.user.name);
    
            navigate('/dashboard', { state: { userName: userData.user.name } });
    
        } catch (error) {
            
            console.error('Erro ao fazer login:', error);
            setError('Credenciais invalidas, ou não registradas!');
        }
    };

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
               setError(''); 
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    return (
        <>    
            <GlobalStyle />
            {error && <StyledErrorMessage>{error}</StyledErrorMessage>}

            <StyledDivLogin>
                <StyledH2>Login</StyledH2>
                <StyledForm onSubmit={handleSubmit}>
                    <StyledDivInputs>
                        <StyledInputs 
                            type="email" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </StyledDivInputs>
        
                    <StyledDivInputs>
                        <StyledInputs 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </StyledDivInputs>

                    <StyledButton type="submit">Entrar</StyledButton>

                    <StyledButtonRegister type="button" onClick={() => navigate('/register')}>
                        Registrar
                    </StyledButtonRegister>
                    <BackToHome />
                </StyledForm>
            </StyledDivLogin>
        </>    
    );
};

export default Login;
