import { defineCollection,z } from "astro:content";

const room = defineCollection({
    type: "content",
    schema: ({image}) => z.object({
        heroImage: image(),
        title: z.string(),
        text: z.string()
    }),
})

export const collections = {room}