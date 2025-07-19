import { bigint, mysqlTable } from "drizzle-orm/mysql-core";

import { photo } from "./photo.js";
import { tag } from "./tag.js";

export const photoTag = mysqlTable("photo_tag", {
  photoId: bigint({ mode: "number", unsigned: true })
    .primaryKey()
    .notNull()
    .references(() => photo.id),
  tagId: bigint({ mode: "number", unsigned: true })
    .primaryKey()
    .notNull()
    .references(() => tag.id),
});

export type PhotoTag = typeof photoTag;
