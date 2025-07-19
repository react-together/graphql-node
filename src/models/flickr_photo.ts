import { bigint, datetime, mysqlTable, tinyint } from "drizzle-orm/mysql-core";

import { photo } from "./photo.js";

export const flickrPhoto = mysqlTable("flickr_photo", {
  createdAt: datetime({ mode: "date" }), // nullable by default
  flickrId: bigint({ mode: "number", unsigned: true }).primaryKey().notNull(),
  isPublic: tinyint().notNull(),
  photoId: bigint({ mode: "number", unsigned: true })
    .notNull()
    .references(() => photo.id),
  updatedAt: datetime({ mode: "date" }), // nullable by default
});

export type FlickrPhoto = typeof flickrPhoto;
