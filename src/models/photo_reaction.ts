import {
  bigint,
  datetime,
  mysqlTable,
  text,
  tinyint,
} from "drizzle-orm/mysql-core";

import { photo } from "./photo.js";
import { user } from "./user.js";

export const photoReaction = mysqlTable("photo_reaction", {
  comment: text(), // nullable by default
  createdAt: datetime({ mode: "date" }), // nullable by default
  isRecommended: tinyint().notNull(),
  photoId: bigint({ mode: "number", unsigned: true })
    .primaryKey()
    .notNull()
    .references(() => photo.id),
  updatedAt: datetime({ mode: "date" }), // nullable by default
  userId: bigint({ mode: "number", unsigned: true })
    .primaryKey()
    .notNull()
    .references(() => user.id),
});

export type PhotoReaction = typeof photoReaction;
