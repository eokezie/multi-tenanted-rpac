import fastify from 'fastify';
import { logger } from './logger';
import { applicationRoutes } from '../modules/applications/applications.routes';

export const buildServer = () => { 
    /** Setting up an instance of fastify server */
    const app = fastify({
        logger: logger
    });

    /** Plugin Registration */

    /** Routes Registration */
    app.register(applicationRoutes, { prefix: '/api/applications' });

    return app
}