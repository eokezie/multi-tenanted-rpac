import { InferModel } from 'drizzle-orm';
import { db } from "../../db"
import { roles } from "../../db/schema"

export  const createRole = async (data: InferModel<typeof roles, 'insert'> ) => {
    const result = await db.insert(roles).values(data).returning();
    return result[0]
}