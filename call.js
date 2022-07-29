const { createConnection } = require("mysql");

const mysql = require.createConnection({
    host: 'b8ngq9rpk2w6npwk31ca-mysql.services.clever-cloud.com',
    user: 'udniyynfzumkdfiz',
    password: '1QP2wBbElXNhx5XPgbJY',
    database: 'b8ngq9rpk2w6npwk31ca',
    multipleStatements: true
});
// Connect
createConnection.connect((err) => {
    if (err) throw err
});

module.exports = connection;