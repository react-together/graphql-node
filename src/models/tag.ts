import {
  bigint,
  mysqlEnum,
  mysqlTable,
  text,
  varchar,
} from "drizzle-orm/mysql-core";

export const tagTypeEnum = ["category", "photographer"] as const;
export type TagType = (typeof tagTypeEnum)[number];

export const tag = mysqlTable("tag", {
  id: bigint({ mode: "number", unsigned: true }).primaryKey().autoincrement(),
  name: varchar({ length: 255 }).unique().notNull(),
  description: text().notNull(),
  note: text().notNull(),
  tagType: mysqlEnum(tagTypeEnum).notNull(),
});

export type Tag = typeof tag;
