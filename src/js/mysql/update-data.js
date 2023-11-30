import pool from './index.js';

const concatSQLSetString = (data, str = '', index = 0) => {
    const dataKeys = Object.keys(data);
    const newStr = str + `${dataKeys[index]}='${data[dataKeys[index]]}'`;
    return dataKeys.length-1 > index ? concatSQLSetString(data, newStr + ', ', ++index) : newStr;
};

export const updateMySQLRole = async (roleInfo, roleId) => {
    const sqlUpdateString = concatSQLSetString(roleInfo);
    const sqlQuery = `
        UPDATE mydb.role
        SET ${sqlUpdateString}
        WHERE id = ${roleId};
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
    }
};