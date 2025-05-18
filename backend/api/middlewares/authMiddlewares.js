import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../.env') });



export function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];


    if (!token) {
        console.log('Token não fornecido');
        return res.status(401).json({ mensagem: 'Token não fornecido' });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            console.log('Erro na verificação do token:', err);
            return res.status(403).json({ mensagem: 'Token inválido ou expirado' });
        }

        req.user = user;
        console.log('Usuário autenticado:', user);
        next();
    });
}





