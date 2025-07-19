import { bigint, mysqlTable } from "drizzle-orm/mysql-core";

import { flickrPhotoset } from "./flickr_photoset.js";
import { tag } from "./tag.js";

export const flickrPhotosetTag = mysqlTable("flickr_photoset_tag", {
  flickrId: bigint({ mode: "number", unsigned: true })
    .primaryKey()
    .notNull()
    .references(() => flickrPhotoset.flickrId),
  tagId: bigint({ mode: "number", unsigned: true })
    .primaryKey()
    .notNull()
    .references(() => tag.id),
});

export type FlickrPhotosetTag = typeof flickrPhotosetTag;
