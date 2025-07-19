import {
  type AnyMySqlColumn,
  bigint,
  datetime,
  mysqlTable,
  varchar,
} from "drizzle-orm/mysql-core";

const directory = mysqlTable("directory", {
  id: bigint({ mode: "number", unsigned: true }).primaryKey().autoincrement(),
  parentId: bigint({ mode: "number", unsigned: true }).references(
    (): AnyMySqlColumn => directory.id,
  ), // nullable by default
  name: varchar({ length: 255 }).notNull(),
  path: varchar({ length: 255 }).notNull(),
  createdAt: datetime({ mode: "date" }), // nullable by default
  updatedAt: datetime({ mode: "date" }), // nullable by default
});

export { directory };
export type Directory = typeof directory;
