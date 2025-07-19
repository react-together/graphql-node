import {
  bigint,
  char,
  datetime,
  mysqlTable,
  varchar,
} from "drizzle-orm/mysql-core";

export const user = mysqlTable("user", {
  id: bigint({ mode: "number", unsigned: true }).primaryKey().autoincrement(),
  email: varchar({ length: 320 }).unique().notNull(),
  keycloakSub: char({ length: 36 }).unique().notNull(),
  createdAt: datetime({ mode: "date" }),
});

export type User = typeof user;
