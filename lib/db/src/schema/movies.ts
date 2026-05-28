import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const CATEGORIES = ["Bollywood", "Hollywood", "Series", "LiveTV"] as const;
export type Category = (typeof CATEGORIES)[number];

export const moviesTable = pgTable("movies", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  category: text("category").notNull(),
  embedUrl: text("embed_url").notNull(),
  downloadUrl: text("download_url").notNull().default(""),
  posterUrl: text("poster_url"),
  quality: text("quality").notNull().default("HD"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertMovieSchema = createInsertSchema(moviesTable).omit({
  id: true,
  createdAt: true,
});
export type InsertMovie = z.infer<typeof insertMovieSchema>;
export type Movie = typeof moviesTable.$inferSelect;
