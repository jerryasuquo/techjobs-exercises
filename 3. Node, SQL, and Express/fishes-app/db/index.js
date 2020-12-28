const { Client } = require("pg");
const client = new Client({
    user: 'jerryasuquo',
    host: 'localhost',
    database: 'fishes-app',
    password: 'password2',
    port: 5432
});

client.connect();

module.exports = client;