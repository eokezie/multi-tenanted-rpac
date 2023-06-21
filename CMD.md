## Install dependencies

```bash
yarn add argon2 drizzle-orm pg pino pino-pretty zennv zod jsonwebtoken fastify-zod fastify-guard fastify
```

## Install dev dependencies
```bash
yarn add zod-to-json-schema @types/jsonwebtoken typescript tsx drizzle-kit @types/pg -D
```
## Initialize TypeScript
```bash
npx tsc --init
```

## Run migrations
```bash
yarn run migrate
```

## Run the application
```bash
yarn run dev
```