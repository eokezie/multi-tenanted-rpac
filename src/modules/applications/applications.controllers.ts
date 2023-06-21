import { FastifyReply, FastifyRequest } from "fastify";
import { CreateApplicationBody } from "./applications.schemas";
import { createApplication } from './applications.services';
import { createRole } from "../roles/roles.services";
import { ALL_PERMISSIONS, SYSTEM_ROLE, USER_ROLE } from "../../config/permissions";

export const createdApplicationHandler = async ( 
    request: FastifyRequest<{
        Body: CreateApplicationBody
    }>,
    reply: FastifyReply
) => {
    const { name } = request.body;

    const application = await createApplication({
        name
    });

    const superAdminRole = await createRole({
        applicationId: application.id,
        name: SYSTEM_ROLE.SUPER_ADMIN,
        permissions: ALL_PERMISSIONS as unknown as Array<string>,
    });

    const applicationUserRole = await createRole({
        applicationId: application.id,  
        name: SYSTEM_ROLE.APPLICATION_USER,
        permissions: USER_ROLE,
    })

    return {
        application,
        superAdminRole,
        applicationUserRole
    }
}
