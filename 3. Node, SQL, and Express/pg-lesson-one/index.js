const { Client } = require("pg"); // include the Client constructor from the pg module

// make a new instance of the Client constructor and specify which db to connect to using the connectionString key
const client = new Client({
    user: "jerryasuquo",
    host: "localhost",
    database: "pg-lesson-one",
    password: "password2",
    port: "5432"
});

// connect!
client.connect();

// let's make a function to get all the rows in our students table!
async function getStudents() {
    try {
        const results = await client.query("SELECT * FROM students");
        return results.rows;
    } catch (err) {
        throw err;
    }
}

// let's get our students and then stop the node process
// when we start using express, process.exit will be a response from the server instead
getStudents()
    .then((allStudents) => console.log(allStudents))
    .catch((err) => console.log(err));


// let's make a function to insert a new record into our students table!
async function insertStudent(name) {
    try {
    const results = await client.query("INSERT INTO students (name) VALUES ($1) RETURNING *", // We're using RETURNING * to get back the new record
    [name] // notice our use of $1 - NEVER EVER use string concatenation/interpolation in your SQL queries.
  );
    console.log(results.rows); // we are using [0] because there is only 1 record here.
    } catch (err) {
        throw err;
    }
}

// when we start using express, process.exit will be a response from the server instead.
// insertStudent("Angelina").then(() => process.exit(0))
//     .catch((err) => console.log(err));