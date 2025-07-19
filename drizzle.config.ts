import type { Config } from "drizzle-kit";

export default {
  casing: "snake_case",
  dialect: "mysql",
  migrations: { prefix: "timestamp" },
  out: "./drizzle/migrations",
  // Use build folder for schema generation since drizzle-kit fails to parse `.js` imports in ESM mode: https://github.com/drizzle-team/drizzle-orm/issues/819
  schema: "./src/models/**/*.ts",
} satisfies Config;
