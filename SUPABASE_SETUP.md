// ================================================
// CONFIGURACIÓN PARA CONECTAR A SUPABASE
// ================================================
// IMPORTANTE: Usar Session Pooler para evitar problemas IPv4
// 
// En tu dashboard de Supabase:
// 1. Ve a Database → Connection pooler
// 2. Mode: Transaction (si es para aplicaciones web)
// 3. Copia la connection string con puerto 6543
// 4. Usa esa URL en DB_HOST con puerto 6543

// Ejemplo de .env para Supabase:
/*
DB_HOST=your-project.supabase.co
DB_PORT=6543
DB_USER=postgres
DB_PASSWORD=your_password_from_supabase
DB_NAME=postgres

// Nota: Supabase usa "postgres" como nombre de base de datos por defecto
// Session Pooler (puerto 6543) es compatible con cualquier red (IPv4/IPv6)
*/

// En tu archivo de configuración de conexión (config/database.ts):
// Asegúrate de que la connection string se forme correctamente:

import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// Opción 1: Usar environment variables separadas (RECOMENDADO)
const pool = new Pool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '6543'), // Usar 6543 para Session Pooler
  database: process.env.DB_NAME || 'postgres',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Opción 2: Usar connection string (ALTERNATIVA)
// const connectionString = process.env.DATABASE_URL;
// const pool = new Pool({ connectionString });

export default pool;
