export const ALL_PERMISSIONS = [
    /** Users */
    'users:roles:write', //Allowed to add role to user
    'users:roles:delete', //Allowed to remove role from user

    /** Posts */
    'posts:write',
    'posts:read',
] as const;

export const PERMISSIONS = ALL_PERMISSIONS.reduce((acc, permission) => {
    acc[permission] = [permission]

    return acc;
}, {} as Record<(typeof ALL_PERMISSIONS)[number], (typeof ALL_PERMISSIONS)[number]>);


export const USER_ROLE = [
    PERMISSIONS["posts:write"],
    PERMISSIONS["posts:read"],
]


export const SYSTEM_ROLE = {
    SUPER_ADMIN: 'SUPER_ADMIN',
    APPLICATION_USER: 'APPLICATION_USER'
}