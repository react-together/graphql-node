import {
  bigint,
  datetime,
  int,
  mysqlTable,
  varchar,
} from "drizzle-orm/mysql-core";

import { flickrPhoto } from "./flickr_photo.js";

export const flickrPhotoSize = mysqlTable("flickr_photo_size", {
  createdAt: datetime({ mode: "date" }), // nullable by default
  flickrPhotoId: bigint({ mode: "number", unsigned: true })
    .primaryKey()
    .notNull()
    .references(() => flickrPhoto.flickrId),
  height: int().notNull(),
  secret: varchar({ length: 255 }).notNull(),
  serverId: varchar({ length: 255 }).notNull(),
  suffix: varchar({ length: 255 }).notNull(),
  updatedAt: datetime({ mode: "date" }), // nullable by default
  width: int().notNull(),
});

export type FlickrPhotoSize = typeof flickrPhotoSize;
