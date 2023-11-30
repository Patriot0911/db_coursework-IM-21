import pool from './index.js';

export const deleteMySQLRoles = async (roleId = undefined) => {
    const sqlQuery = `
        DELETE FROM mydb.role
        ${roleId ? ` WHERE id = ${roleId};` : ';'}
    `;
    try {
        const [response] = await pool.query(sqlQuery);
        return {
            dbResponse: response
        };
    } catch(e) {
        return {
            dbError: true,
            dbResponse: e.sqlMessage
        };
    };
};

export const deleteMySQLRolePermissions = async (roleId, permId = undefined) => {
    const sqlQuery = `
        DELETE FROM mydb.permission_has_role
        WHERE
        Role_id = ${roleId}
        ${permId ? ` AND Permission_id = ${permId};` : ';'}
    `;
    try {
        const [response] = await pool.query(sqlQuery);
        return {
            dbResponse: response
        };
    } catch(e) {
        return {
            dbError: true,
            dbResponse: e.sqlMessage
        };
    };
};

export const deleteMySQLUsersWithRole = async (roleId) => {
    const sqlDeleteUsersAccesses = `
        DELETE
        FROM mydb.access a
        WHERE a.User_id IN
            (
                SELECT id
                FROM mydb.user u
                WHERE u.Role_id = ${roleId}
            );
    `;
    const sqlDeleteUsers = `
        DELETE
        FROM mydb.user
        WHERE Role_id = ${roleId};
    `;
    try {
        await pool.query(sqlDeleteUsersAccesses);
        const [response] = await pool.query(sqlDeleteUsers);
        return {
            dbResponse: response
        };
    } catch(e) {
        return {
            dbError: true,
            dbResponse: e.sqlMessage
        };
    };
};