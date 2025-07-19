import {
  bigint,
  datetime,
  mysqlTable,
  text,
  varchar,
} from "drizzle-orm/mysql-core";

import { user } from "./user.js";

export const flickrPhotoset = mysqlTable("flickr_photoset", {
  createdAt: datetime({ mode: "date" }), // nullable by default
  description: text().notNull(),
  flickrId: bigint({ mode: "number", unsigned: true }).primaryKey().notNull(),
  title: varchar({ length: 255 }).notNull(),
  updatedAt: datetime({ mode: "date" }), // nullable by default
  userId: bigint({ mode: "number", unsigned: true })
    .notNull()
    .references(() => user.id),
});

export type FlickrPhotoset = typeof flickrPhotoset;
