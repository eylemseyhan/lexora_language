import "dotenv/config";
import type { Config } from "drizzle-kit";

const dbUrl = new URL(process.env.DATABASE_URL || "");

export default {
  schema: "./db/schema.ts", // Schema dosyasının yolu
  out: "./drizzle", // Migration dosyalarının yolu
  dialect: "postgresql", // PostgreSQL kullanıyoruz
  dbCredentials: {
    host: dbUrl.hostname,
    port: Number(dbUrl.port) || 5432, // Eksik port varsa varsayılanı kullan
    user: dbUrl.username,
    password: dbUrl.password,
    database: dbUrl.pathname.slice(1), // İlk '/' işaretini kaldırıyoruz
    ssl: "require", // SSL zorunlu
  },
} satisfies Config;
