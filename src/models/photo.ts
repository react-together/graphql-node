import { bigint, datetime, mysqlTable } from "drizzle-orm/mysql-core";

export const photo = mysqlTable("photo", {
  id: bigint({ mode: "number", unsigned: true }).primaryKey().autoincrement(),
  createdAt: datetime({ mode: "date" }),
  updatedAt: datetime({ mode: "date" }),
});

export type Photo = typeof photo;
