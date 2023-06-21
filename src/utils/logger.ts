import pino from 'pino';

export const logger = pino({
    /** NB: not advisable to use pino-pretty in production 
     * according to the 
     * documentation: https://getpino.io/#/docs/api?id=pretty
     */
    redact: ["DB_CONNECTION"],
    level: "debug",
    transport: {
        target: 'pino-pretty'
    },
});