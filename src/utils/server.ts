import fastify from 'fastify';
import { logger } from './logger';

export const buildServer = () => { 
    /** Setting up an instance of fastify server */
    const app = fastify({
        logger: logger
    });

    /** Plugin Registration */

    /** Routes Registration */

    return app
}