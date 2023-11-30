import pool from './index.js';

export const insertMySQLRole = async (roleInfo) => {
    const sqlQuery = `
        INSERT INTO mydb.role
        (name, description)
        VALUES
        ("${roleInfo.name}", "${roleInfo.description}");
    `;
    try {
        const [response] = await pool.query(sqlQuery);
        return {
            dbResponse: response
        };
    } catch (e) {
        return {
            dbError: true,
            dbResponse: e.sqlMessage
        };
    };
};