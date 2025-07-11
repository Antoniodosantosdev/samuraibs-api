require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASS,
  database: process.env.POSTGRES_NAME,
});

client.connect()
  .then(() => {
    console.log('✅ Conectado com sucesso ao banco PostgreSQL (Supabase)!');
    return client.end();
  })
  .catch(err => {
    console.error('❌ Erro ao conectar:', err.message);
  });
