import { defineCollection,z } from "astro:content";

const room = defineCollection({
    type: "content",
    schema: ({image}) => z.object({
        heroImage: image().refine((img) => img.width >= 1080, {
            message: "Cover image must be at least 1080 pixels wide!",
          }),
        title: z.string(),
        text: z.string()
    }),
})

export const collections = {room}