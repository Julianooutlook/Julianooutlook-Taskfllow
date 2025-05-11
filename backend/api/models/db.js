import dotenv from 'dotenv';
dotenv.config({ path: './config/.env' }); 

import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  port: Number(process.env.POSTGRES_PORT) || 5432,
  host: process.env.POSTGRES_HOST || 'localhost',
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD, // agora vai ser string
  database: process.env.POSTGRES_DB,
});

pool.query('SELECT NOW()')
  .then(res => {
    console.log('✅ Conectado ao banco:', res.rows[0].now);
  })
  .catch(err => {
    console.error('❌ Erro ao conectar:', err);
  });

export default pool;
