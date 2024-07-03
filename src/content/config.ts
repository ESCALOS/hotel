import { defineCollection,z } from "astro:content";

const room = defineCollection({
    type: "content",
    schema: ({image}) => z.object({
        heroImage: image(),
        title: z.string(),
        text: z.string(),
        tags: z.array(z.object({
            title: z.string(),
            icon: z.string()
        }))
    }),
});

const roomEn = defineCollection({
    type: "content",
    schema: ({image}) => z.object({
        heroImage: image(),
        title: z.string(),
        text: z.string(),
        tags: z.array(z.object({
            title: z.string(),
            icon: z.string()
        }))
    }),
})

export const collections = {room, roomEn}