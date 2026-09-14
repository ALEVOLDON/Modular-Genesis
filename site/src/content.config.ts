import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const lessonSchema = z.object({
  title: z.string(),
  summary: z.string(),
  track: z.enum(["foundations", "sequencing", "generative", "hybrid", "audiovisual"]),
  order: z.number(),
  difficulty: z.enum(["Beginner", "Intermediate", "Advanced"]).optional(),
  estimatedTime: z.string().optional()
});

const noteSchema = z.object({
  title: z.string(),
  summary: z.string(),
  order: z.number()
});

const patchSchema = z.object({
  title: z.string(),
  summary: z.string(),
  track: z.enum(["foundations", "sequencing", "generative", "performances"]),
  filename: z.string(),
  status: z.enum(["placeholder", "draft", "ready"]),
  order: z.number(),
  image: z.string().optional(),
  audio: z.string().optional(),
  duration: z.string().optional(),
  version: z.string().optional()
});

export const collections = {
  lessons: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/lessons" }),
    schema: lessonSchema
  }),
  "ru-lessons": defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/ru-lessons" }),
    schema: lessonSchema
  }),
  notes: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/notes" }),
    schema: noteSchema
  }),
  "ru-notes": defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/ru-notes" }),
    schema: noteSchema
  }),
  patches: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/patches" }),
    schema: patchSchema
  }),
  "ru-patches": defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/ru-patches" }),
    schema: patchSchema
  })
};
