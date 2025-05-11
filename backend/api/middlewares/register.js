import bcrypt from 'bcryptjs';
import pool from '../models/db.js';

export async function register(req, res) {
    const { name, email, password } = req.body;

    try {
        const verification = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if (verification.rows.length > 0) {
            return res.status(409).json({ mensagem: 'E-mail já está em uso.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const query = `
            INSERT INTO users (name, email, password)
            VALUES ($1, $2, $3)
            RETURNING id, name, email, created_at;
        `;

        const  values = [name, email, hashedPassword];
        const { rows } = await pool.query(query, values);

        res.status(201).json({
            mensagem: 'Usuário registrado com sucesso!',
            usuario: rows[0],
        });
    } catch (err) {
        console.error('Erro ao registrar usuário.', err);
        res.status(500).send('Erro de servidor.');
    }
}