import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1).max(100),
    description: z.string().min(1).max(200),
    pubDate: z.coerce.date(),
    author: z.string().default('志連精緻搬家'),
    category: z.enum([
      'move',
      'home-moving',
      'office-moving',
      'special-moving',
      'moving-guide',
      'recommend',
      'qna',
    ]),
    tags: z.array(z.string()).default([]),
    image_1_prompt: z.string().optional(),
    image_2_prompt: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
