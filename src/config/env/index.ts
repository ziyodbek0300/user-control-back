import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

console.log(process.env.NODE_ENV)

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const { NODE_ENV, DB_USER, DB_PASSWORD, PORT, DB_HOST, DB_PORT, DB_DATABASE, SECRET_KEY, LOG_FORMAT, LOG_DIR, ORIGIN } = process.env;