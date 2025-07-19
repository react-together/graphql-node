import { bigint, datetime, mysqlTable, varchar } from "drizzle-orm/mysql-core";

import { directory } from "./directory.js";
import { photo } from "./photo.js";

export const photoFile = mysqlTable("photo_file", {
  createdAt: datetime({ mode: "date" }), // nullable by default
  directoryId: bigint({ mode: "number", unsigned: true })
    .primaryKey()
    .notNull()
    .references(() => directory.id),
  integrity: varchar({ length: 255 }).primaryKey().notNull(),
  name: varchar({ length: 255 }).notNull(),
  photoId: bigint({ mode: "number", unsigned: true })
    .notNull()
    .references(() => photo.id),
  updatedAt: datetime({ mode: "date" }), // nullable by default
});

export type PhotoFile = typeof photoFile;
