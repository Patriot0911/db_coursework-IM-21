import pool from './index.js';

export const getMySQLRoles = async (roleId = undefined) => {
    const sqlQuery = `
        SELECT *
        FROM mydb.role
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

export const getMySQLRolePermissions = async (roleId = undefined) => {
    const sqlQuery = `
        SELECT Permission_id
        FROM mydb.permission_has_role
        ${roleId ? ` WHERE Role_id = ${roleId};` : ';'}
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