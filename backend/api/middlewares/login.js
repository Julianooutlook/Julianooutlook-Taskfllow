import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import pool from "../models/db.js";
import dotenv from 'dotenv';


dotenv.config({ path: './config/.env' });

export async function login(req, res) {
    const { email, password } = req.body;

    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if (result.rows.length === 0) {
            return res.status(400).json({ mensagem: 'E-mail ou senha inválidos.' });
        }

        const user = result.rows[0];

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(400).json({ mensagem: 'E-mail ou senha inválidos.' });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, 
            process.env.JWT_SECRET_KEY, 
            { expiresIn: '1h' });

        res.json({
            mensagem: 'Login bem-sucedido!',
            token,
            user: { id: user.id, name: user.name, email: user.email }
        });

    } catch (err) {
        console.error('Erro ao fazer o login:', err);
        res.status(500).send('Erro de servidor.');
    }
}