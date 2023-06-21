import { FastifyInstance } from "fastify";
import { createApplicationJsonSchema } from "./applications.schemas";
import { createdApplicationHandler } from "./applications.controllers";

export const applicationRoutes = async (app: FastifyInstance) => {
    app.post(
        '/', 
        {
            schema: createApplicationJsonSchema
        }, 
        createdApplicationHandler
    );

    app.get('/', {}, () => {});
}