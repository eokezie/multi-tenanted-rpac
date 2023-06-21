import { z } from 'zod';
import zodToJsonSchema from 'zod-to-json-schema';   

const createApplicationBodySchema = z.object({
    name: z.string({
        required_error: 'Name is required'
    })
});


export type CreateApplicationBody = z.infer<typeof createApplicationBodySchema>;

/** Fastify only accepts JSON hence we need to convert the body to JSON */
export const createApplicationJsonSchema = {
    body: zodToJsonSchema(createApplicationBodySchema, "createApplicationBodySchema")
}