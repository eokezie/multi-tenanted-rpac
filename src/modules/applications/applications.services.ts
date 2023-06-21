import { InferModel } from "drizzle-orm";
import { db } from "../../db"
import { applications } from "../../db/schema"

export const createApplication = async (data: InferModel<typeof applications, "insert">) => { 
    const result = await db.insert(applications).values(data).returning();
    return result[0]
}


export const getApplications = async () => {
    /** SELECT * FROM applications */
    /** SELECT id, name, createdAt FROM applications */
    const result = await db.select({
        id: applications.id,
        name: applications.name,
        createdAt: applications.createdAt,
    }).from(applications);

    return result;
}