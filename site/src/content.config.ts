import { defineCollection, z } from "astro:content";

const lessons = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    track: z.enum(["foundations", "sequencing", "generative", "hybrid", "audiovisual"]),
    order: z.number()
  })
});

const notes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number()
  })
});

const patches = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    track: z.enum(["foundations", "sequencing", "generative", "performances"]),
    filename: z.string(),
    status: z.enum(["placeholder", "draft", "ready"]),
    order: z.number()
  })
});

export const collections = {
  lessons,
  notes,
  patches
};
