import "dotenv/config";
import mysql, { ConnectionOptions } from "mysql2/promise";

function getRequiredEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

const config: ConnectionOptions = {
  host: getRequiredEnv("DB_HOST"),
  user: getRequiredEnv("DB_USER"),
  password: getRequiredEnv("DB_PASSWORD"),
  database: getRequiredEnv("DB_NAME"),
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
};

export const db = await mysql.createConnection(config);
