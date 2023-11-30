import mysql from 'mysql2/promise';

const dbInfo = {
    user:       "root",
    password:   "0hQjgq5xA3cIKbj",
    database:   "mydb",
    host:       "localhost"
};

const pool = mysql.createPool(dbInfo);

export default pool;