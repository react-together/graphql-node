import { drizzle } from "drizzle-orm/mysql2";
import { createPool } from "mysql2/promise";

export const pool = createPool({
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: +(process.env.DB_PORT ?? 3306),
  user: process.env.DB_USER,
});

export const db = drizzle(pool, {
  casing: "snake_case",
  mode: "default",
});
